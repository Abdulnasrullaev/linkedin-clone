import {SET_USER} from "../actions/actionType";


const defaultState = {
    user: null,
}


const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            }

        default:
            return state;
    }
}

export default userReducer