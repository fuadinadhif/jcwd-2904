import express from "express";
import {
  createPost,
  draftPost,
  getAllPost,
  getSinglePost,
  publishPost,
  searchPost,
  togglePostPublishedStatus,
  updatePostContent,
} from "../controllers/post-controller";
import { uploader } from "../middlewares/uploader-middleware";

const router = express.Router();
const upload = uploader();

router.route("/").get(getAllPost).post(upload.single("image"), createPost);
router.route("/search").get(searchPost);
router.route("/:id").get(getSinglePost).put(updatePostContent);
router.route("/:id/publish").put(publishPost);
router.route("/:id/draft").put(draftPost);

export default router;
