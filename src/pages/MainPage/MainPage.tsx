import React, { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getCountries } from '../../redux/slices/fetchDataSlice';
import { fetchData } from '../../redux/slices/fetchDataSlice';
import { useNavigate } from 'react-router-dom';

import '../MainPage/MainPage.css'


const MainPage: React.FC = () => {

    const navigate = useNavigate(); // 
    const { countries, error, isLoading } = useAppSelector(state => state.fetchDataReducer)
    const dispatch = useAppDispatch()


    const fetchCountries = async () => {
        await dispatch(fetchData())
        dispatch(getCountries())
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    return (
        <div className='mainPageWrapper'>
            <img className='logo' src="https://i.ibb.co/2nR1H9S/image-21.png" alt='logo' />
            <h2>Сервис для тех, кто выбирает, где провести ближайшие пять лет </h2>
            {isLoading ? <h2>Идет загрузка...</h2> : <>
                <h3>Выбирайте желаемую страну из списка!</h3>
                <div className='countriesList__wrapper'>
                    {countries?.map((c) => (
                        <a className='mainPage__a' onClick={() => navigate(`/country/${c}`)}>{c}</a>
                    ))}
                </div>
            </>
            }
            {error && <h1>{error}</h1>}


        </div>
    )
}

export default MainPage;