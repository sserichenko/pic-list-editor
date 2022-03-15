import { combineReducers } from 'redux';
import piclist from "./piclist";
import categories from "./categories";
import subCategories from "./subCategories";
import items from "./items";
const rootReducer = combineReducers({
    piclist,
    categories,
    subCategories,
    items
})

export default rootReducer;