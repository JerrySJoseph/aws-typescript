import { handlerPath } from '@libs/handler-resolver';
import { AWSLambdaFunction } from 'src/types/lambda';

const functionEvent:AWSLambdaFunction= {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http:{
        method:'get',
        path:'h',
      }
    }   
  ],
};

export default functionEvent;
