/*
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

// app.get: 서버 응답 출력
app.get('/api/host', (req, res) => {
    res.send({host: 'poongho'});
})

app.get('/api/test', (req, res) => {
    db.query("select * from test", (err, data) => {
        if(!err) {
            res.send(data);

        } else {
            console.log(err);
            res.send(err);
        }
    })
})

// 해당 포트의 서버 실행
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}`);
})
*/

const express = require('express');
const app = express();

const sequelize = require('./models').sequelize;
sequelize.sync();

app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})


