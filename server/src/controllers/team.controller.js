const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {teamService} = require('../services');

const createTeam = catchAsync(async (req, res) => {
    const team = await teamService.createTeam(req.body);
    res.status(httpStatus.CREATED).send(team);
  }
);
const getTeams = catchAsync(async (req, res) => {
    const result = await teamService.getTeams();
    res.send(result);
  }
);

const getTeamById = catchAsync(async (req, res) => {
    const team = await teamService.getTeamById(req.params.teamId);
    if (!team) {
      res.status(httpStatus.NOT_FOUND).send('Team not found');
    }
    res.send(team);
  }
);

const updateTeamById = catchAsync(async (req, res) => {
    const team = await teamService.updateTeamById(req.params.teamId, req.body);
    res.send(team);
  }
);

const deleteTeam = catchAsync(async (req, res) => {
    const team = await teamService.deleteTeamById(req.params.teamId);
    res.send(team);
  }
);

module.exports = {
  createTeam, getTeams, getTeamById, updateTeamById, deleteTeam
};

