// eslint-disable-next-line import/no-anonymous-default-export
export default `#graphql
  allLocations: [Location!]!
  locationsById(location_ids: [String!]!): [Location!]!
  onUserWishlist(user_id: String!): [Location!]!
`
