import { emitWarning } from 'process';
import prisma from '../utils/db';

//GET All
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  res.json({ data: user.products });
};

//GET One
export const getOneProduct = async (req, res) => {
  const id = req.params.id;

  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

//Create Product
export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsTo: req.user.id,
    },
  });

  res.json({ data: product });
};

//Update Product
export const updateProduct = async (req, res) => {
  const updated = await prisma.product.update({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      }
    },
    data: {
      name: req.body.name,
    },
  });

  //it's nice as an API to send back the updated object to save the client from making an additional call to retieve he updated object
  res.json({ data: updated });
};

//Delete Product
export const deleteProduct = async (req, res) => {
  const deleted = await prisma.product.delete({
    where: {
      id_belongsToId: {
        id: id: req.params.id,
        belongsToId: req.user.id,
      }
    },
  });

  res.json({ data: deleted });
};
