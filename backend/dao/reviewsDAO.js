import mongoose from "mongoose";
const {ObjectId} = mongoose.Types

let Reviews;
export default class ReviewsDAO {
    static async injectDB(conn) {
        if (Reviews) {
            return;
        }
        try {
            const reviewSchema = new mongoose.Schema({
                movieId: Number,
                user: String,
                review: String,
            })

            Reviews = conn.model('reviews',reviewSchema)
        }
        catch (e) {
            console.error(`Unable to establish connection handle in userDAO: ${e}`);    
        }
    }

    static async addReview(movieId, user, reviewText) {
        try {
            const review = new Reviews({
                movieId: parseInt(movieId),
                user: user,
                review: reviewText,
            })
            
            const savedReview =  await review.save();
            return savedReview;
        }
        catch (e) {
            console.error(`Unable to post review: ${e}`);
            return {error: e}
        }
    }
    
    static async getReview(reviewId) {
        try {
            const reviews = await Reviews.findById({_id: new ObjectId(reviewId)});
            return reviews;
        }
        catch (err) {
            console.error(`unable to get reviews: ${err}`);
            return {error: e}
        }         
    }

    static async updateReview(reviewId,user,review) {
        // console.log("rev",reviewId);
        try {
            const updatedResponse = await Reviews.findByIdAndUpdate(
                {_id: new ObjectId(reviewId)},
                {$set: {user: user, review: review}}
            );
            return updatedResponse;
        }
        catch (e) {
            console.log("unable to update");
            return {error: e}
        }
    }

    static async deleteReview(reviewId) {
        try {
            const deleteResponse = await Reviews.deleteOne({_id: new ObjectId(reviewId)});
            return deleteResponse;
        }
        catch (e) {
            console.log("unable to delete");
            return {error: e};
        }
    }
    static async getReviewsByMovieId(movieId) {
        try {
            const cursor = await Reviews.find({movieId: parseInt(movieId)});
            return cursor;
        }
        catch (e) {
            console.error(`unable to get reviews: ${e}`);
            return {error: e};
        }
    }

}