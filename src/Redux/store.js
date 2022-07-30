import {legacy_createStore,combineReducers} from 'redux';

import { reducer as Appreducer } from './Appreducer/reducer';
import { reducer as Authreducer } from './Authreducer/reducer';

const rootReducer = combineReducers({Appreducer,Authreducer})

const store = legacy_createStore(rootReducer);

export {store};