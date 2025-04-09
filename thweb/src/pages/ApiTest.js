import React, { useEffect, useState } from 'react';

function ApiTest() {
  const [message, setMessage] = useState('');
  const [input, setInput] = useState('');

  // Gọi API GET khi trang được tải
  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  // Gửi API POST để cập nhật tin nhắn
  const handleSubmit = () => {
    fetch('http://localhost:5000/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newMessage: input }),
    })
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        alert(data.status);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Test API</h2>
      <p><strong>Backend message:</strong> {message}</p>
      <input
        type="text"
        placeholder="Nhập tin nhắn mới"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Gửi POST</button>
    </div>
  );
}

export default ApiTest;
