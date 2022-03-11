const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

//Post and get request to /api/thoughts
router.route('/').get(getThoughts).post(createThought);

//Get and post request to /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//Post request to /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

//Delete request to /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
