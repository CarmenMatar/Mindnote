import mongoose from "mongoose";

const Comment = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export { Comment }