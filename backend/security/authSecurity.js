import { generateJWT } from "../helpers/jwtkit.js";
import { prepareErrorLog } from "../errorLog/errorLog.js";

const signUpSecurity = async (req, res, next) => {
    try {
        const user = req.user;
        const registeredToken = await generateJWT(user);
        res.cookie("token", registeredToken);
        req.responseModel = { token: registeredToken, id: user._id };
        next();
    } catch (error) {
        prepareErrorLog(error, signUpSecurity.name);
        return res.status(403)
            .json(prepareErrorResponse({message: 'Sign up security error', code: 403}));
    }
};

const logInSecurity = async (req, res, next) => {
    try {
        const user = req.user;
        const registeredToken = await generateJWT(user);
        res.cookie("token", registeredToken);
        req.responseModel = { token: registeredToken, id: user._id };
        next();
    } catch (error) {
        prepareErrorLog(error, logInSecurity.name);
        return res.status(403)
            .json(prepareErrorResponse({message: 'Log in security error', code: 403}));
    }
};

export {
    signUpSecurity,
    logInSecurity
}