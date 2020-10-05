import handler from '../../src/handler';
import axios from 'axios';
import asyncHandler from '../../middlewares/asyncHandler';

export default handler.get(
  asyncHandler(async (req, res) => {
    const apiRes = await axios(`https://jsonplaceholder.typicode.com/posts`);
    return res
      .status(200)
      .json({ success: true, msg: 'API up and running', data: apiRes.data });
  })
);
