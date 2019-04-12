const finalhandler = require('finalhandler')
const http = require('http')
const Router = require('router')
const fs = require('fs');

const router = Router()
router.get('/', function (req, res) {
    
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
  
    fs.readdir('./Pics', function (err, items) {
        console.log(items)
        res.end(JSON.stringify(items))
    }

    )
})

router.get('/Myfolder/:Mypic', function (req, res) {
    
    // res.setHeader('Content-Type', 'application/json; charset=utf-8')
    fs.readFile(`./Pics/${req.params.Mypic}`, (err, data) => {
        if (err) throw err;
        res.end(data);
      });


     }




)

const server = http.createServer(function (req, res) {
    router(req, res, finalhandler(req, res))
})

server.listen(3000)