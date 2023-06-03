import { createSlice } from '@reduxjs/toolkit'
import { PaginationProps } from '../../models'


const initialState: PaginationProps = {
    currentPage: 1,
    pageSize: 10,
}


const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
            window.scrollTo(0, 0)
        },
        setPageSize(state, action) {
            state.pageSize = action.payload
        },
        resetPages (state, action) {
            state.currentPage = action.payload;
        }
    }
})

export const { setCurrentPage, setPageSize, resetPages } = paginationSlice.actions;
export default paginationSlice.reducer