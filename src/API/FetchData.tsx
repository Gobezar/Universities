import axios from 'axios'
import { IUniversity } from '../models'

async function FetchData  () {

    const response = await axios.get<IUniversity[]>('http://universities.hipolabs.com/search')
    const result = (response.data)
    return result

}


export default FetchData
