import { DynamoDBClient, GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';

export function getDBClient(region:string='us-east-1'){
    return new DynamoDBClient({region});
}

export async function addDoc<T>(client:DynamoDBClient,tableName:string,document:T){
    return client.send(new PutItemCommand({
        TableName:tableName,
        Item:marshall(document)
    }));
}



export default class DatabaseClient<T>{
    
    private dynamoDbClient:DynamoDBClient;
    private tableName:string;

    constructor(tableName:string,region:string='us-east-1'){
        this.tableName=tableName;
        this.dynamoDbClient=new DynamoDBClient({
            region
        });        
    }

    async put(data:T){
        return this.dynamoDbClient.send(new PutItemCommand({
            TableName:this.tableName,
            Item:marshall(data)
        }));
    }
    
    async get(key:any){
        const output=await this.dynamoDbClient.send(new GetItemCommand({
            TableName:this.tableName,
            Key:marshall(key)
        }))
        if(!output.Item){
            throw new Error('Not found');
        }
        return unmarshall(output.Item);
    }
}
