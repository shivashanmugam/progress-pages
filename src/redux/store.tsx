import { create } from 'domain';
import {createStore} from 'redux';
// @ts-ignore
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

interface iS {
    [key:string]:string
}

const initialState:iS = {
    codeSnippet : '<div><h1>Initial data</h1></div>'
}

export default createStore(rootReducer, initialState, composeWithDevTools());