// Action types
export const WISHLIST_ADDED = "wishlistAdded";
export const WISHLIST_DELETED = "wishlistDeleted";

// Action creators

export const wishlistAdded = (payload) => ({
  type: WISHLIST_ADDED,
  payload: payload,
});
export const wishlistDeleted = (payload) => ({
  type: WISHLIST_DELETED,
  payload: payload,
});
