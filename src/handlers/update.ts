import { prisma } from '../utils';

//Get all updates
export const getAllUpdates = async (req, res) => {
  const updates = await prisma.update.findMany({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: update });
};

//Get one Update
export const getOneUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: update });
};

//Create Update
export const createUpdate = async (req, res) => {};

//Update update
export const update = async (req, res) => {};

//Delete Update
export const deleteUpdate = async (req, res) => {};
