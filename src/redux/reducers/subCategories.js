const initialState = {
    subCategories: [],
    isLoaded: false
}

const subCategories = (state = initialState, action) => {

    switch(action.type){
        case "SET_SUBCATEGORIES": {
            return {
                ...state,
                subCategories: action.payload,
                isLoaded: true
            };
        }
        case "SET_LOADED": {
            return {
                ...state,
                isLoaded: action.payload,
            };
        }

        default :
        return state
    }
}

export default subCategories;