import { findAllLocations, findLocationsById, onUserWishlist } from "@/mongoose/locations/services"

export const locationQueries = {
  allLocations: (_: any) => {
    return findAllLocations()
  },
  locationsById: (_: any, param: { location_ids: string[] }) => {
    return findLocationsById(param.location_ids)
  },
  onUserWishlist: (_: any, param: { user_id: string }) => {
    return onUserWishlist(param.user_id)
  },
}
