import { connectDB } from '../../src/connectDB';
import handler from '../../src/handler';
import axios from 'axios';
import asyncHandler from '../../middlewares/asyncHandler';
import User from '../../models/User';

connectDB();

export default handler.post(
  asyncHandler(async (req, res) => {
    const newUser = await User.create(req.body);
    return res.status(200).json({ success: true, data: newUser });
  })
);
