import {
  addHackathonDao,
  getAllHackathonsDao,
  getHackathonByIdDao,
  getHackathonSearchServiceDao,
} from "../dao/hackathon.js";

const addHackathonService = async (t, data) => await addHackathonDao(t, data);

const getAllHackathonsService = async (t) => await getAllHackathonsDao(t);

const getHackathonByIdService = async (t, id) =>
  await getHackathonByIdDao(t, id);

const getHackathonSearchService = async (t, hackathonName, techStack) =>
  await getHackathonSearchServiceDao(t, hackathonName, techStack);

export {
  addHackathonService,
  getAllHackathonsService,
  getHackathonByIdService,
  getHackathonSearchService,
};
