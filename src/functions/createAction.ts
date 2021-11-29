import { APIGatewayProxyHandler } from "aws-lambda";
import { v4 as uuidV4 } from "uuid";
import dayjs from "dayjs";

import { document } from "src/utils/dynamodbAction";

interface ICreateActionUsers {
  title: string;
  deadline: string;
}

export const handle: APIGatewayProxyHandler = async (event) => {
  const { user_id } = event.pathParameters

  const { title, deadline } = JSON.parse(event.body) as ICreateActionUsers;

  await document.put({
    TableName: "user_actions",
    Item: {
      id: uuidV4(),
      user_id,
      title,
      done: false,
      deadline: dayjs(deadline).format("DD/MM/YYYY"),
    }
  })
  .promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Information created"
    }),
    headers: {
      "Content-type": "application/json",
    },
  }
} 