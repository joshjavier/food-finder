import { QueryOptions } from "mongoose"
import { FilterLocationType, FilterWishlistType } from "./custom"
import Locations from "./model"
import { LocationType } from "./schema"

async function findLocations(
  filter: FilterLocationType | FilterWishlistType | {}
): Promise<LocationType[] | []> {
  try {
    let result = await Locations.find(filter)
    return result as LocationType[]
  } catch (err) {
    console.log(err)
  }
  return []
}

export function findAllLocations(): Promise<LocationType[] | []> {
  return findLocations({})
}

export function findLocationsById(location_ids: string[]): Promise<LocationType[] | []> {
  let filter: FilterLocationType = { location_id: location_ids }
  return findLocations(filter)
}

export function onUserWishlist(user_id: string): Promise<LocationType[] | []> {
  let filter: FilterWishlistType = {
    on_wishlist: {
      $in: [user_id],
    }
  }
  return findLocations(filter)
}

export async function updateWishlist(
  location_id: string,
  user_id: string,
  action: string,
): Promise<LocationType | null | {}> {
  let filter = { location_id: location_id }
  let options: QueryOptions = { upsert: true, returnDocument: "after" }
  let update = {}

  switch (action) {
    case 'add':
      update = { $push: { on_wishlist: user_id } }
      break;
    case 'remove':
      update = { $pull: { on_wishlist: user_id } }
      break
  }

  try {
    let result: LocationType | null = await Locations.findOneAndUpdate(filter, update, options)
    return result
  } catch (err) {
    console.log(err)
  }
  return {}
}
