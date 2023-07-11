const prepareErrorResponse = (errorStatus) => {
    const model = {
        message: errorStatus.message,
        statusCode: errorStatus.code,
    };
    return model;
};

export {
    prepareErrorResponse,
};