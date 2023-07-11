import { UserModel } from "../models/user/user.js";

const createUserQuery = async (body) => {
    return await UserModel(body).save();
};

const getUserByIdQuery = async (id) => {
    const user = await UserModel.findOne({
        _id: id,
    });
    return user;
};

const getUserByEmailQuery = async (email) => {
    const checked_email = email.toLowerCase();
    const user = await UserModel.findOne({
        "email": checked_email,
    });
    return user;
};

const getUserByNicknameQuery = async (username) => {
    const user = await UserModel.findOne({
        "nickname": nickname,
    });
    return user;
};

const UserQueries = {
    createUserQuery,
    getUserByIdQuery,
    getUserByEmailQuery,
    getUserByNicknameQuery
}

export { UserQueries }