import jwt from "jsonwebtoken";
import { prepareErrorResponse } from "../presenters/common/errorResponsePresenter.js";
import { CommonErrorResponses } from "../responses/messages/errors/common/commonErrorResponse.js";
import { prepareErrorLog } from "../errorLog/errorLog.js";
import { getUserByIdQuery } from "../database/queries/user/userQueries.js";

const tokenSecurity = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if(!token) {
            return res.status(401)
                .json(prepareErrorResponse({message: 'Token not present', code: 401}));
        } 
        const data = jwt.decode(token.replace("Bearer", "").trim(), process.env.JWT_SECRET);
        if(data) {
            const user = await getUserByIdQuery(data.user.id);
            if(!user) {
                return res.status(404)
                    .json(prepareErrorResponse({message: 'User not found', code: 404}));
            }
            req.user = user;
            next();
        } else {
            return res.status(403)
                .json(prepareErrorResponse({message: 'Sign up security error', code: 403}));
        }
    } catch(error) {
        prepareErrorLog(error, tokenSecurity.name);
        return res.status(500)
            .json(prepareErrorResponse({message: 'Security Server Error', code: 500}));        
    }
};

export {
    tokenSecurity
}