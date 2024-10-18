const { 
    register, 
    login, 
    setAvatar, 
    getAllUsers,
    addMessage,
    getAllMessage
  } = require('../controllers/messagesController');

const router = require('express').Router();

router.post('/addmesg/', addMessage);
router.post('/getmsg/', getAllMessage);

module.exports = router;