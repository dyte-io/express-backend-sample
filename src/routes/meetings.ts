import { Router } from 'express';
import { z } from 'zod';
import DyteAPI from '../utils/dyte-api';

const router = Router();

const createMeetingSchema = z.object({
  title: z.string().optional(),
});

const addParticipantSchema = z.object({
  name: z.string(),
  picture: z.string().optional(),
  preset_name: z.string(),
});

router.post('/', async (req, res) => {
  try {
    const parseResult = createMeetingSchema.safeParse(req.body);

    if (!parseResult.success) {
      console.log(parseResult.error);
      return res.status(400).json({ success: false, message: 'Bad Request' });
    }

    const { title } = req.body as z.infer<typeof createMeetingSchema>;

    const response = await DyteAPI.post('/meetings', {
      title,
    });

    return res.status(response.status).json(response.data);
  } catch (err: any) {
    console.log(err.response.status, err.response.data);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

router.post('/:meetingId/participants', async (req, res) => {
  try {
    const meetingId = req.params.meetingId as string;

    const parseResult = addParticipantSchema.safeParse(req.body);

    if (!parseResult.success) {
      console.log(parseResult.error);
      return res.status(400).json({ success: false, message: 'Bad Request' });
    }

    const { name, picture, preset_name } = req.body as z.infer<
      typeof addParticipantSchema
    >;

    // Adding a random hash to be able to add multiple users with same name
    // Do not add random hash in your production app
    const client_specific_id = `react-samples::${name.replaceAll(
      ' ',
      '-'
    )}-${preset_name.replaceAll(' ', '-')}-${Math.random()
      .toString(36)
      .substring(2, 7)}`;

    const response = await DyteAPI.post(`/meetings/${meetingId}/participants`, {
      name,
      picture,
      preset_name,
      client_specific_id,
    });

    return res.status(response.status).json(response.data);
  } catch (err: any) {
    console.log(err.response.status, err.response.data);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

export default router;
