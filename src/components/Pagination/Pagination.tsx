import React from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setCurrentPage, setPageSize } from '../../redux/slices/PaginationSlice'
import { PaginationProps } from '../../models';
import { Pagination } from 'antd'

import '../Pagination/Pagination.css'



const Paginator: React.FC<PaginationProps> = ( {currentPage, pageSize, totalCount} ) => {

    const dispatch = useAppDispatch()

    const onPageChange = (page: number) => {
        dispatch(setCurrentPage(page))
    }


    const changeSizeShow = (_: any, size: number) => {
        dispatch(setPageSize(size))
    }

    return (
        <div
            className={'paginator_container'}>
            <Pagination
                defaultPageSize={pageSize}
                current={currentPage}
                onChange={onPageChange}
                defaultCurrent={1}
                onShowSizeChange={changeSizeShow}
                total={totalCount} 
                showTotal={(total, range) => `${range[0]}-${range[1]} из ${total} университетов`}
                />
        </div>
    )
}

export default Paginator;