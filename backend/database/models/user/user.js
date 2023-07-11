import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const UserModelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        nickname: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            default: ''
        },
        emotionIds: {
            type: Array,
            default: []
        },
        postIds: {
            type: Array,
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

UserModelSchema.plugin(mongoosePaginate);
UserModelSchema.plugin(aggregatePaginate);

const UserModel = mongoose.model("Users", UserModelSchema);
export { UserModel }