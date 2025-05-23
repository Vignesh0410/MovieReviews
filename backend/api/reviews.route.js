import express from "express";
import reviewsCtrl from "./reviews.controller.js"; 
const router = express.Router();

router.route("/").get((req,res) => res.send("Hello World"));
router.route("/new").post(reviewsCtrl.apiPostReview);
router.route("/movie/:id").get(reviewsCtrl.apiGetReviews);
router.route("/:id")
    .get(reviewsCtrl.apiGetReview)
    .put(reviewsCtrl.apiUpdateReview)
    .delete(reviewsCtrl.apiDeleteReview);

export default router;