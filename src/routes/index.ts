import { Router } from 'express';
import MeetingsRouter from './meetings';
import PresetsRouter from './presets';

const router = Router();

router.use('/meetings', MeetingsRouter);
router.use('/presets', PresetsRouter);

export default router;
