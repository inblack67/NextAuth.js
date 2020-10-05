import nextConnect from 'next-connect';
import ErrorHandler from '../middlewares/errorHandler';
import morgan from 'morgan';
import 'colors';

export default nextConnect({
  onError: ErrorHandler,
  onNoMatch(req, res) {
    return res.status(400).json({ success: false });
  },
}).use(morgan('dev'));
