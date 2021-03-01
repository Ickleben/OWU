import {createStore} from "redux";
import {reducer} from "./reducer/reducer";

export const store =new createStore(reducer)