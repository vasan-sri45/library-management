const router = require('express').Router();
const {login,signup} = require('../../controller/admin-controller');

router.post('/signup',signup);
router.post('/login',login);


module.exports = router;