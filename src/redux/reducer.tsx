import { combineReducers } from "redux";

interface Action {
    type: string,
    payload: string
}


function codeSnippet(store: Object, action: Action){
    if(action.type == 'change-of-code-snippet'){
        return {
            ...store,
            codeSnippet : action.payload
        }
    }else{
        return {
            ...store
        }
    }
}

export default combineReducers({codeSnippet});