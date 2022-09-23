import {addHackathonDao, getAllHackathonsDao, getHackathonByIdDao} from '../dao/hackathon.js';

 const addHackathonService = async (t, data) => await addHackathonDao(t, data);
 
 const getAllHackathonsService = async (t) => await getAllHackathonsDao(t);

 const getHackathonByIdService = async (t, id) => await getHackathonByIdDao(t, id);

export {addHackathonService,getAllHackathonsService, getHackathonByIdService};
