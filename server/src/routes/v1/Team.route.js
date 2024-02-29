const express = require('express');
const auth = require('../../middlewares/auth');
const {uploadController, teamController} = require("../../controllers");

const upload = require("../../middlewares/upload");
const router = express.Router();


router
  .route('/')
  .post(teamController.createTeam)
  .get(teamController.getTeams);

router
  .route('/team/:teamId')
  .get(teamController.getTeamById)
  .patch(auth(), teamController.updateTeamById)
  .delete(auth(), teamController.deleteTeam);

router.route('/upload/image').post(upload.single('image'), uploadController.uploadImage);

module.exports = router;




