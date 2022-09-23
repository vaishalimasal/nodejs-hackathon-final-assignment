import {addHackathonDao, getAllHackathonsDao} from '../dao/hackathon.js';

 const addHackathonService = async (t, data) => await addHackathonDao(t, data);
 const getAllHackathonsService = async (t) => await getAllHackathonsDao(t);


export {addHackathonService,getAllHackathonsService };
