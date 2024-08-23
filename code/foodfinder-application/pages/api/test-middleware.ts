import dbConnect from "@/middleware/db-connect"
import { findAllLocations } from "@/mongoose/locations/services"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  await dbConnect()
  const locations = await findAllLocations()
  res.status(200).json(locations)
}
