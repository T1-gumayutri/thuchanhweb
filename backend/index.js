const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Cho phép frontend truy cập
app.use(cors());
// Cho phép backend hiểu JSON gửi từ frontend
app.use(express.json());

// Biến lưu tin nhắn tạm thời
let message = "Hello from backend!";

// API GET: gửi dữ liệu về frontend
app.get('/api/message', (req, res) => {
  res.json({ message });
});

// API POST: nhận dữ liệu từ frontend
app.post('/api/message', (req, res) => {
  const { newMessage } = req.body;
  message = newMessage;
  res.json({ status: "Message updated", message });
});
app.get('/', (req, res) => {
    res.send('Backend đang hoạt động!');
  });

// Chạy server
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
 
