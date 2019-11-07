const router = require('express').Router();
const users = require('../data/users');


router.get('/users/:id', (req, res) => {
  const {id} = req.params;
  const userId = users.find(user => user._id == req.params.id)
  if(userId){
    res.send(userId)
    return;
  }
  else{
    res.statusCode = 404;
    res.json({ "message": "Нет пользователя с таким id" })
  }
})


router.get('/users', (req, res) => {
  res.send(users);
})


module.exports = router;