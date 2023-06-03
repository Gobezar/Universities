import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { usePageCount } from '../../hooks/usePageCount';
import { fetchUniversities, filterUniversities  } from '../../redux/slices/fetchDataSlice';
import Paginator from '../../components/Pagination/Pagination';
import UniversitiesList from '../../components/UniversitiesList/UniversitiesList';
import { resetPages } from '../../redux/slices/PaginationSlice';

import { useSearchedElements } from '../../hooks/useSearchedElements';
import Search from '../../components/Search/Search';
import '../ItemCountry/ItemCountry.css'



const ItemCountry: React.FC = () => {

    const { country } = useParams()
    const { filteredUniversities } = useAppSelector(state => state.fetchDataReducer)
    const currentPage = useAppSelector(state => state.PaginationSlice.currentPage)
    const pageSize = useAppSelector(state => state.PaginationSlice.pageSize)
    const currentPageUniversities = usePageCount(currentPage, pageSize, filteredUniversities)

    const [searchText, setSearchText] = useState('')
    const searchedElements = useSearchedElements(currentPageUniversities, searchText);

    const dispatch = useAppDispatch()
    const navigate = useNavigate();



    async function getUniversities(c: string | undefined) {
        dispatch(resetPages(1))
        await dispatch(fetchUniversities(c))
        dispatch(filterUniversities())
    }

    useEffect(() => {
        getUniversities(country)
    }, [])

    return (
        <div className='ItemCountryWrapper'>
            <h3>Поиск необходимого учебного заведения</h3>
            <div className='searchWrappper'><Search searchText={searchText} setSearchText={setSearchText}/></div>
            <UniversitiesList searchedElements={searchedElements}/>
            <Paginator currentPage={currentPage} pageSize={pageSize} totalCount={filteredUniversities.length} />
            <button onClick={() => navigate(-1)}>Вернуться назад</button>
        </div>
    )
}

export default ItemCountry;