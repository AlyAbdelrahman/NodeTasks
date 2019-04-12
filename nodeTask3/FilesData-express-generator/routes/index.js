var express = require('express');
var router = express.Router();

const Movies =[
{ID:1,Name:'Adventure to marth '},
{ID:2,Name:'Dum&Dumber2'},
{ID:3,Name:'Dainasors'},
{ID:4,Name:'titanic'},
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { Movies});
});

router.post('/add', function(req, res, next) {
  // res.render('Create');
  // console.log(req.body)
  Movies.push(req.body)
  res.redirect('/')
});

router.get('/NewMovie', function(req, res, next) {
  res.render('Create');

});


router.get('/editMovie/:id', function(req, res, next) {
  const matchedMovie = Movies.find((item) => item.ID ==req.params.id);
  // console.log(matchedMovie)
  res.render('EditMovie',{matchedMovie});

});

router.post('/edit', function(req, res, next) {
  
  console.log(req.body);
  const matchedMovie = Movies.find((item) => item.ID ==req.body.ID);
  // console.log(matchedMovie)
  // matchedMovie.ID=req.body.ID;
  matchedMovie.Name=req.body.Name;
  res.redirect('/')

});

router.get('/deleteMovie/:id', function(req, res, next) {

  for (let index = 0; index < Movies.length; index++) {
    if( Movies[index].ID == req.params.id){
      // Movies[index].delete
      Movies.splice(index, 1);
    };
    
  }
  // console.log(Movies[req.params.id])
  res.redirect('/')
  

});




module.exports = router;
