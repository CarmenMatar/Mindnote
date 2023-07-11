import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
import { Comment } from "./comment";

const PostModelSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        photos: {
            type: String,
        },
        userId: {
            type: String,
            required: true,
        },
        comments: {
            type: [Comment],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

PostModelSchema.plugin(mongoosePaginate);
PostModelSchema.plugin(aggregatePaginate);

const PostModel = mongoose.model("Posts", PostModelSchema);
export { PostModel }