const express = require('express');
const userscontroller = require('../controllers/userscontroller')
const router = express.Router();
router.get('/userlist',userscontroller.userlist);
router.get('/singleuserlist/(:id)',userscontroller.singleuserlist);
router.post('/registration',userscontroller.uploadImage,userscontroller.registration);
router.post('/login',userscontroller.login);
router.delete('/deleteuser/(:id)',userscontroller.deleteuser);
router.put('/updateuser/(:id)',userscontroller.updateuser);

// router.post('/image', upload.single('file'), function (req, res) {
//     res.json({})
//   })
  
  
module.exports = router
