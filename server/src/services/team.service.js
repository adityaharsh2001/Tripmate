const {Package} = require('../models');
const {Category} = require('../models');
const ApiError = require('../utils/ApiError');
const Team = require('../models/team.model');
const httpStatus = require('http-status');
const createTeam = async (teamBody) => {
  console.log('teamBody', teamBody);
  return Team.create(teamBody);
}

const getTeams = async () => {
  return Team.find();
}

const getTeamById = async (id) => {
  return Team.findById(id);
}

const updateTeamById = async (id, updateBody) => {
  const team = await getTeamById(id);
  if (!team) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Team not found');
  }
  Object.assign(team, updateBody);
  await team.save();
  return team;
}

const deleteTeamById = async (id) => {
  const team = await getTeamById(id);
  if (!team) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Team not found');
  }
  await team.remove();
  return team;
}

module.exports = {
  createTeam, getTeams, getTeamById, updateTeamById, deleteTeamById
}


