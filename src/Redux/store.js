import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleWare from 'redux-saga'
import { rootReducer } from './rootReducer'
import blogs from './saga'
const sagaMiddleware=createSagaMiddleWare()
export const store=configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
})
sagaMiddleware.run(blogs);
