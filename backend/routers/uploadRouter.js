import express from 'express';
import multer from 'multer';
import { isAuth, isAdmin } from '../utils';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'frontend/uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });
const uploadRouter = express.Router();

uploadRouter.post('/', isAuth, isAdmin, upload.single('image'), (req, res) => {
  const imagePath = req.file.path.replace("frontend", "../..")
  res.status(201).send({ image: `/${imagePath}` });
});
export default uploadRouter;
