const prepareSuccessResponse = (statusCode, message, data) => {

    const model = {
        data: data,
        message: message,
        statusCode: statusCode,
    };
    return model;
};

export {
    prepareSuccessResponse,
};