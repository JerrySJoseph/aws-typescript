
function response(statusCode: number, body?: any) {
    return {
        statusCode,
        body: JSON.stringify(body || {})
    }
}

const AWSLambdaResponse = {
    _200: (body?: any) => response(200, body)
}

export default AWSLambdaResponse;
