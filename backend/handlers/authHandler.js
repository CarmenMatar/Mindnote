import { UserQueries } from "../database/queries/userQueries.js";
import pkg from "lodash";
import bcrypt from "bcrypt";
import { prepareErrorLog } from "../errorLog/errorLog.js";

const { isEmpty } = pkg;

const signUpHandler = async (req, res, next) => {
    try {
        const requestModel = req.requestModel;
        const userByEmail = await UserQueries.getUserByEmailQuery(requestModel.email);
        const userByNickname = await UserQueries.getUserByNicknameQuery(requestModel.nickname);
        if(!isEmpty(userByEmail)) {
            return res.status(400)
                .json(prepareErrorResponse({message: 'User already exists', code: 400}));
        }
        else if(!isEmpty(userByNickname)) {
            return res.status(400)
                .json(prepareErrorResponse({message: 'User already exists', code: 400}));
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(requestModel.password, salt);
            requestModel.password = hashedPassword;
            requestModel.isAdmin = false;
            requestModel.profilePic = '';
            requestModel.emotionIds = [];
            requestModel.postIds = [];
            const savedUser = await createUserQuery(newUser);
            req.user = savedUser;
            next();
        }
    } catch(error) {
        prepareErrorLog(error, signUpHandler.name);
        return res.status(500)
          .json(prepareErrorResponse({message: 'Internal Server Error', code: 500}));
    }
};

const logInHandler = async (req, res, next) => {
    try {
        const requestModel = req.requestModel;
        const userByNickname = requestModel?.nickname && await getUserByUsernameQuery(requestModel?.nickname);
        const userByEmail = requestModel?.email && await getUserByEmailQuery(requestModel?.email);
        const user = userByNickname || userByEmail;
        const userError = requestModel?.nickname ? {message: 'wrong nickname or password', code: 401} : {message: 'wrong email or password', code: 401};
        if (isEmpty(user)) {
            return res.status(userError.code)
                .json(prepareErrorResponse(userError));
        }
        const passwordValidation = await bcrypt.compare(requestModel.password, user.password);
        if (!passwordValidation) {
            return res.status(userError.code)
                .json(prepareErrorResponse(userError));
        }
        req.user = user;
        next();
    } catch(error) {
        prepareErrorLog(error, logInHandler.name);
        return res.status(500)
          .json(prepareErrorResponse({message: 'Internal Server Error', code: 500}));
    }
};

export {
    signUpHandler,
    logInHandler
}