const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// app.get: 서버 응답 출력
app.get('/api/host', (req, res) => {
    res.send({host: 'poongho'});
})

// 해당 포트의 서버 실행
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}`);
})