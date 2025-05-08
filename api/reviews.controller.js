import ReviewsDAO from "../dao/reviewsDAO.js";

export default class ReviewsController {
    static async apiPostReview(req, res, next) {
        try {
            const movieId = req.body.movieId;
            const review = req.body.review;
            const user = req.body.user;

            const reviewResponse = await ReviewsDAO.addReview(
                movieId,
                user,
                review,
            );
            if (reviewResponse.error) {
                return res.status(500).json({ status: "Failure", error: reviewResponse.error });
            }
            res.json({status: "Success"})
        }
        catch(e) {
            res.status(500).json({error: e.message})
        }
    }
    static async apiGetReview(req,res,next) {
        try {
            const id = req.params.id || {};
            const reviews = await ReviewsDAO.getReview(id);
            if (!reviews) {
                res.status(404).json({error: "Not Found"});
                return;
            }
            res.json(reviews);
        }
        catch(e) {
            console.log(`api, ${e}`);
            res.status(500).json({error: e});
        }
    }
    static async apiUpdateReview(req,res,next) {
        try {
            const reviewId = req.params.id || {};
            const review = req.body.review;
            const user = req.body.user;

            const response = await ReviewsDAO.updateReview(
                reviewId,
                user,
                review,
            )
            var {error} = response;
            if (response.modiefiedCount === 0) {
                throw new Error(
                    "Unable to update review"
                )
            }
            res.json({status: "Success"})

        }
        catch(e) {
            console.log(`api, ${e}`);
            res.status(500).json({error: e});
        }
    }
    static async apiDeleteReview(req,res,next) {
        try {
            const reviewId = req.params.id || {};
            const reviewResponse = await ReviewsDAO.deleteReview(reviewId);
            if (reviewResponse.error) {
                res.status(500).json({status: "Error: " + reviewResponse.error});
                return;
            }
            res.json({status: "Success"});
        }
        catch (err) {
            console.log(`api, ${err}`);
            res.status(500).json({error: e});
        }
    }
    static async apiGetReviews(req,res,next) {
        try {
            let id = req.params.id || {};
            let reviews = await ReviewsDAO.getReviewsByMovieId(id);
            if (!reviews) {
                res.status(404).json({error: "Not Found"});
                return;
            }
            res.json(reviews);
        }
        catch (err) {
            console.log(`api, ${err}`);
            res.status(500).json({error: e});
        }
    }
}