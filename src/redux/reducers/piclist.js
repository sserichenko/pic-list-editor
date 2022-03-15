const initialState = {
    piclist: {},
    isLoaded: false,
    isEditItemModalVisible: false,
    EditingItemField: {},
    isEditForm: false,
    isAddForm: false,
    some: {}
}


const newPicList = (state, action) => {
    let items = state.piclist.Items.Item.map(item => (item.UPC === action.payload.UPC) ? {...action.payload} : item)
    let newPicList = {...state.piclist, Items: [...items]}
    return newPicList
}


const piclist = (state = initialState, action) => {

    console.log('initialState', initialState)

    switch(action.type){
        case "SET_PICLIST": {
            return {
                ...state,
                piclist: action.payload,
                isLoaded: true
            };
        }

        case "ADD_ITEM_TO_PICLIST": {
            return {
                ...state,
                piclist: {...state.piclist, ...state.piclist.Items.Item.push(action.payload)}
            };
        }

        case "UPDATE_ITEM_IN_PICLIST": {
            return {
                ...state,
                piclist: {...state.piclist},
                some: newPicList(state, action),
                
            }
        }

        case "SET_LOADED": {
            return {
                ...state,
                isLoaded: action.payload,
            };
        }

        case "SHOW_EDIT_ITEMS_MODAL": {
            return {
                ...state,
                isEditItemModalVisible: true,
            };
        }

        case "HIDE_EDIT_ITEMS_MODAL": {
            return {
                ...state,
                isEditItemModalVisible: false,
            };
        }

        case "ACTIVATE_EDIT_FORM": {
            return {
                ...state,
                isEditForm: true,
                isAddForm: false,
                EditingItemField: action.payload
            };
        }

        default :
        return state
    }
}

export default piclist;