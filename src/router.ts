import { Router } from 'express';
import { body } from 'express-validator';

import {
  getOneProduct,
  getAllProducts,
  createProduct,
  deleteProduct,
} from './handlers';
import { handleInputErrors } from './utils';

const router = Router();

/**
 * Product
 */
router.get('/product', getAllProducts);
router.get('/product/:id', getOneProduct);
router.put(
  '/product/:id',
  [body('name').isString(), handleInputErrors],
  (req, res) => {}
);
router.post(
  '/product',
  [body('name').isString(), handleInputErrors],
  createProduct
);
router.delete('/product/:id', deleteProduct);

/**
 * Update
 */
router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put(
  '/update/:id',
  [
    body('title').optional().isString(),
    body('body').optional().isString(),
    body('status').isIn(['IN_PROGRESS', 'LIVE', 'DEPRECATED', 'ARCHIVED']),
    body('version').optional().isString(),
    body('version').optional().isString(),
    handleInputErrors,
  ],
  () => {}
);
router.post(
  '/update',
  [
    body('title').exists().isString(),
    body('body').exists().isString(),
    handleInputErrors,
  ],
  () => {}
);
router.delete('/update/:id', () => {});

/**
 * Update Point
 */
router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put(
  '/updatepoint/:id',
  [
    body('name').optional().isString(),
    body('description').optional().isString(),
    handleInputErrors,
  ],
  () => {}
);
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
router.delete('/updatepoint/:id', () => {});

export default router;
