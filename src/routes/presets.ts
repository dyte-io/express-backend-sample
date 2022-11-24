import { Router } from 'express';
import DyteAPI from '../utils/dyte-api';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const response = await DyteAPI.get('/presets');

    return res.status(response.status).json(response.data);
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

export default router;
