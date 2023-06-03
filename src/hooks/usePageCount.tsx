import {useMemo} from 'react'
import { IUniversity } from '../models';



export const usePageCount = (currentPage: number, pageSize: number, filteredUniversities: IUniversity[]) => {
    
    
    const currentPageUniversities = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize
        const lastPageIndex = firstPageIndex + pageSize
        return filteredUniversities.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, filteredUniversities, pageSize])

    return currentPageUniversities
}