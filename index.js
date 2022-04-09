exports.handler = async (event) => {
    console.log({event})
    return {
        statusCode: 200, // default value
        body: JSON.stringify({
            data: `hello from lambda function url`,
            event
        }),
    };
};
