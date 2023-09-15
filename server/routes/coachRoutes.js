const express = require('express');
const router = express.Router();
const coachController = require('../controllers/coachController');
const { validateCoach } = require('../middlewares/validation');

// Route to create a new coach
router.get('/list', coachController.getCoachList);

router.post('/create', validateCoach, coachController.createCoach);

router.put('/update/:coachId', validateCoach, coachController.updateCoach);

router.delete('/:coachId', coachController.deleteCoach);

router.get('/:coachId', coachController.getCoachById);

module.exports = router;
