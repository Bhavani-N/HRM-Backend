const express = require('express');
const router = express.Router();

const auth = require('../../controllers/auth/login');
const { addStaff, deleteStaff, getStaff, updateStaff } = require('../../controllers/staff');

router.post('/signup', auth.signup);
router.post('/login', auth.login);

router
    .route('/')
    .post(addStaff.addStaff)
    .get(getStaff.getAllStaffs);

router
    .route('/:id')
    .get(getStaff.getStaff)
    .patch(updateStaff.updateStaff)
    .delete(deleteStaff.deleteStaff)

// router.patch('/updateStaff', updateStaff.updateStaff);
// router.delete('/deleteStaff', deleteStaff.deleteStaff);

module.exports = router;