import configPromise from "@payload-config";
import { getPayload } from "payload";

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const users = await payload.find({
    collection: "users",
    pagination: false,
  });

  return Response.json({
    message: users,
  });
};
