const mongoose = require('mongoose');

const LeaderBoard = mongoose.model('LeaderBoard');
const { getFormattedMessage } = require('../messages/leaderBoard');

/**
 * Show leaderboard data, which contains all user facts
 * information, ordering them by amount of points each
 * user has.
 *
 * @param {*} req
 * @param {*} res
 */
exports.list = async (req, res) => {
  const users = await LeaderBoard.find({}).sort('-points');
  res.send(getFormattedMessage(users));
};