import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import logger from "redux-logger"
import rootReducer from "../reducers"

const debug = process.env.NODE_ENV === "development" ? logger : null

const middlwares = [thunk, debug]

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlwares))
)
