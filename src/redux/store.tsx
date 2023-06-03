import { combineReducers, configureStore } from '@reduxjs/toolkit'
import fetchDataReducer from './slices/fetchDataSlice'
import PaginationSlice from './slices/PaginationSlice'

const rootReducer = combineReducers({
    fetchDataReducer, 
    PaginationSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']