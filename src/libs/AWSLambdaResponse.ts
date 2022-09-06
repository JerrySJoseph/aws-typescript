import { APIGatewayProxyResult } from "aws-lambda";

export function createAWSLambdaResponse(statusCode: number, body?: any,args?:Omit<APIGatewayProxyResult,'body'|'statusCode'>):APIGatewayProxyResult{
    return {
        statusCode,
        body: JSON.stringify(body || {}),
        ...args
    }
}
