import userReducer from "../modules/reducers";

const {combineReducers} = require("redux");


const rootReducer = combineReducers({
    userState: userReducer,
});

export default rootReducer