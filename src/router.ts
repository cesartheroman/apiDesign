import { Router } from 'express';
import { body, oneOf, validationResult } from 'express-validator';
import handleInputErrors from './utils/middleware';

const router = Router();

/**
 * Product
 */
router.get('/product', (req, res) => {});
router.get('/product/:id', () => {});
router.put(
  '/product/:id',
  [body('name').isString(), handleInputErrors],
  (req, res) => {}
);
router.post('/product', [body('name').isString(), handleInputErrors], () => {});
router.delete('/product/:id', () => {});

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
  ],
  () => {}
);
router.post(
  '/update',
  [body('title').exists().isString(), body('body').exists().isString()],
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
  ],
  () => {}
);
router.post(
  '/updatepoint',
  [
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
  ],
  () => {}
);
router.delete('/updatepoint/:id', () => {});

export default router;
