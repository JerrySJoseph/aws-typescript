import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult, Context } from 'aws-lambda';
import AWSLambdaResponse from 'src/AWSLambdaResponse';

const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  ctx: Context): Promise<APIGatewayProxyResult> => {


  return AWSLambdaResponse._200()
}

export const main = handler;
