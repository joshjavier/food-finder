import { updateWishlist } from "@/mongoose/locations/services"

interface UpdateWishlistInterface {
  user_id: string
  location_id: string
}

export const locationMutations = {
  addWishlist: (_: any, param: UpdateWishlistInterface, context: {}) => {
    return updateWishlist(param.location_id, param.user_id, 'add')
  },
  removeWishlist: (_: any, param: UpdateWishlistInterface, context: {}) => {
    return updateWishlist(param.location_id, param.user_id, 'remove')
  },
}
