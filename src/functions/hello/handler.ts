import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult, Context, Callback } from 'aws-lambda'

const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  ctx: Context,
  cb: Callback): Promise<APIGatewayProxyResult> => {


  return {
    statusCode: 200,
    body: JSON.stringify({
      success:true,
      event,
      ctx,
    })
  }
}

export const main = handler;
