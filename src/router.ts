import { Router } from 'express';
import { body } from 'express-validator';

import {
  getOneProduct,
  getAllProducts,
  createProduct,
  deleteProduct,
  getAllUpdates,
  getOneUpdate,
  updateProduct,
  updateUpdate,
  createUpdate,
  deleteUpdate,
} from './handlers';
import { handleInputErrors } from './utils';

const router = Router();

/**
 * Product
 */
router.get('/product', getAllProducts);
router.get('/product/:id', getOneProduct);
router.post(
  '/product',
  [body('name').isString(), handleInputErrors],
  createProduct
);
router.put(
  '/product/:id',
  [body('name').isString(), handleInputErrors],
  updateProduct
);
router.delete('/product/:id', deleteProduct);

/**
 * Update
 */
router.get('/update', getAllUpdates);
router.get('/update/:id', getOneUpdate);
router.post(
  '/update',
  [
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    handleInputErrors,
  ],
  createUpdate
);
router.put(
  '/update/:id',
  [
    body('title').optional().isString(),
    body('body').optional().isString(),
    body('status')
      .isIn(['IN_PROGRESS', 'LIVE', 'DEPRECATED', 'ARCHIVED'])
      .optional(),
    body('version').optional().isString(),
    body('version').optional().isString(),
    handleInputErrors,
  ],
  updateUpdate
);
router.delete('/update/:id', deleteUpdate);

/**
 * Update Point
 */
router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.post(
  '/updatepoint',
  [
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    handleInputErrors,
  ],
  () => {}
);
router.put(
  '/updatepoint/:id',
  [
    body('name').optional().isString(),
    body('description').optional().isString(),
    handleInputErrors,
  ],
  () => {}
);
router.delete('/updatepoint/:id', () => {});

export default router;
