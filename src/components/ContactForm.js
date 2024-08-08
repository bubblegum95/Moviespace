import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone, email, preferredTime, message }),
    };
    try {
      const response = await fetch(
        'https://dummy.restapiexample.com/api/v1/create',
        options
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      alert('complete');
      setName('');
      setPhone('');
      setEmail('');
      setPreferredTime('');
      setMessage('');
    } catch (error) {
      setError('There was a problem sending your message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">성함</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">연락처</label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">이메일 주소</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="preferredTime">희망시간대</label>
        <select
          id="preferredTime"
          value={preferredTime}
          onChange={(e) => setPreferredTime(e.target.value)}
          required
        >
          <option value="" disabled>
            선택하세요
          </option>
          <option value="9 ~ 10시">9 ~ 10시</option>
          <option value="10 ~ 11시">10 ~ 11시</option>
          <option value="11 ~ 12시">11 ~ 12시</option>
          <option value="12 ~ 13시">12 ~ 13시</option>
          <option value="13 ~ 14시">13 ~ 14시</option>
          <option value="15 ~ 16시">15 ~ 16시</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">문의 내용</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : '상담 신청하기'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default ContactForm;
