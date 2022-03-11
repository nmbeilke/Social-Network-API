const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

//Get route to /api/users
router.route('/').get(getUsers).post(createUser);

//Get route to /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//Post route to /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
