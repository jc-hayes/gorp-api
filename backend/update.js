import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      trailId: event.pathParameters.id
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: "SET trailName = :trailName, peakElevation = :peakElevation, trailDuration = :trailDuration, roundtripLength = :roundtripLength, elevationGain = :elevationGain, description = :description",
    ExpressionAttributeValues: {
      ":trailName": data.trailName || null,
      ":peakElevation": data.peakElevation || null,
      ":trailDuration": data.trailDuration || null,
      ":roundtripLength": data.roundtripLength || null,
      ":elevationGain": data.elevationGain || null,
      ":description": data.description || null
    },
    // 'ReturnValues' specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update; you
    // can inspect 'result' below to see how it works with different settings
    ReturnValues: "ALL_NEW"
  };

  try {
    await dynamoDbLib.call("update", params);
    return success({ status: true });
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}