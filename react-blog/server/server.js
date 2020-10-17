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
const router = require('./route');

const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser')

sequelize.sync();
//sequelize.sync({ force: true }); // 데이터 초기화

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', router);

const {
    Teacher,
    Sequelize: { Op }
  } = require('./models');
sequelize.query('SET NAMES utf8;');

app.post('/add/data', (req, res) => {
    console.log(req.body)

      Teacher.create({
          name : req.body.data
      })
      .then( result => {
          res.send(result)
      })
      .catch( err => {
          console.log(err)
          throw err;
      })
})

app.get('/get/data', (req, res) => {
    Teacher.findAll({
        //where: { [Op.or]: [{ id: 1}, {name: 'taewoo'}]}
    })
    .then( result => { res.send(result)} )
    .catch( err => { throw err })
})

app.post('/modify/data', (req, res) => {
    Teacher.update({ name : req.body.modify.name }, {
        where : { id : req.body.modify.id }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err }) 
}) 

app.post('/delete/data', (req, res) => {
    Teacher.destroy({
        where : { id : req.body.delete.id }
    })
    .then( res.sendStatus(200))
    .catch( err => { throw err})
})

/*
app.post('/modify/data', (req, res) => {
    Teacher.update({ name : req.body.modify.name}, {
        where : { [Op.or] : [{id : req.body.modify.id},  {name : 'taewoo' }]}
    })
    .then( result => { res.send(result)})
    .catch( err => { throw err })
})
*/
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})


