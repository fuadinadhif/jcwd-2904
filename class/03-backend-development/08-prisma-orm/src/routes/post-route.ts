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

const router = express.Router();

router.route("/").get(getAllPost).post(createPost);
router.route("/search").get(searchPost);
router.route("/:id").get(getSinglePost).put(updatePostContent);
router.route("/:id/publish").put(publishPost);
router.route("/:id/draft").put(draftPost);

export default router;
