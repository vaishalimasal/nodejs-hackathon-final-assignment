import {
  addHackathonDao,
  getAllHackathonsDao,
  getHackathonByIdDao,
  getHackathonSearchServiceDao,
  updateHackathonDao,
  deleteHackathonbyIdDao
} from "../dao/hackathon.js";

const addHackathonService = async (t, data) => await addHackathonDao(t, data);

const getAllHackathonsService = async (t) => await getAllHackathonsDao(t);

const getHackathonByIdService = async (t, id) =>
  await getHackathonByIdDao(t, id);

const getHackathonSearchService = async (t, hackathonName, techStack) =>
  await getHackathonSearchServiceDao(t, hackathonName, techStack);

const updateHackathonService = async (t, id, data) =>
	await updateHackathonDao(t, id, data);

const deleteHackathonbyIdService = async (t, id) => await deleteHackathonbyIdDao(t, id);


export {
  addHackathonService,
  getAllHackathonsService,
  getHackathonByIdService,
  getHackathonSearchService,
  updateHackathonService,
  deleteHackathonbyIdService
};
