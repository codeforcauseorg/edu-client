import { produce } from "immer";
import { WISHLIST_ADDED, WISHLIST_DELETED } from "../actions/wishlistActions";

let lastId = 0;
export default function wishlistReducer(initialState = [], action) {
  switch (action.type) {
    case WISHLIST_ADDED:
      return produce(initialState, (wishlist) => {
        wishlist.push({
          id: ++lastId,
          title: action.payload.title,
          startDate: action.payload.startDate,
          duration: action.payload.duration,
          price: action.payload.price,
          description: action.payload.description,
        });
      });
    case WISHLIST_DELETED:
      return initialState.filter((wishlist) => wishlist.id !== action.payload.id);

    default:
      return initialState;
  }
}
