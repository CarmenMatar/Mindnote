import { signUpValidationScheme, logInValidationScheme } from "./schemes/authValidationSchemes.js";
import { prepareErrorResponse } from "../presenters/common/errorResponsePresenter.js";
import { prepareErrorLog } from "../errorLog/errorLog.js"

const signUpValidator = (req, res, next) => {
  try {
    const result = signUpValidationScheme.validate(req.body);
    if (result.error) {
      return res.status(400)
        .json(prepareErrorResponse({message: 'User validation error', code: 400}));
    } else {
      req.requestModel = bodyReceived;
      next();
    }
  } catch (error) {
    prepareErrorLog(error, signUpValidator.name);
    return res.status(500)
      .json(prepareErrorResponse({message: 'User creation error', code: 400}));
  }
};

const logInValidator = (req, res, next) => {
  try {
    const result = logInValidationScheme.validate(req.body);
    if (result.error) {
      return res.status(400)
        .json(prepareErrorResponse({message: 'User validation error', code: 400}));
    } else {
      req.requestModel = bodyReceived;
      next();
    }
  } catch (error) {
    prepareErrorLog(error, logInValidator.name);
    return res.status(500)
      .json(prepareErrorResponse({message: 'User creation error', code: 400}));
  }
};

export {
  signUpValidator,
  logInValidator
}