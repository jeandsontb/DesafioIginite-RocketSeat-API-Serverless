import { APIGatewayProxyHandler } from "aws-lambda";

import { document } from "src/utils/dynamodbAction";

export const handle: APIGatewayProxyHandler = async (event) => {

  const { user_id } = event.pathParameters;

  const response = await document
    .scan({
      TableName: "user_actions",
      FilterExpression: "user_id = :user_id",
      ExpressionAttributeValues: {
        ":user_id": user_id
      }
    })
    .promise();

    const actions = response.Items;

    return {
      statusCode: 200,
      body: JSON.stringify({
        actions
      })
    }
}