import {combineReducers} from 'redux';
import { blogReducer,cardReducer, todoReducer } from './reducer';

export const rootReducer=combineReducers({
   blogs:blogReducer,
   cards:cardReducer,
   todos:todoReducer
})