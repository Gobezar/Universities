import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUniversity } from '../../models'


export const fetchData = createAsyncThunk('fetch/fetchData', async () => {
    const response = await axios.get<IUniversity[]>('http://universities.hipolabs.com/search')
    const result = (response.data)
    return result
})

export const fetchUniversities = createAsyncThunk('fetch/fetchUniversities', async (country: string | undefined) => {
    const response = await axios.get<IUniversity[]>(`http://universities.hipolabs.com/search?country=${country}`)
    const result = (response.data)
    return result
})


interface DataState {
    allUniversities: IUniversity[];
    countries: string[];
    countryUniversities: IUniversity[],
    filteredUniversities: IUniversity[],
    isLoading: boolean;
    error: string;
    count: number
}

const initialState: DataState = {
    allUniversities: [],
    countries: [],
    countryUniversities: [],
    filteredUniversities: [],
    isLoading: false,
    error: '',
    count: 0,
}

export const fetchDataSlice = createSlice({
    name: 'fetchData',
    initialState,
    reducers: {
        getCountries(state) {
            state.allUniversities.forEach((item) => {
                const country = item.country;
                if (!state.countries.includes(country)) {
                    state.countries.push(country);
                }
            });
            state.countries.sort().join();
        },

        filterUniversities: (state) => {
            state.filteredUniversities = state.countryUniversities.sort((a, b) => a.name.localeCompare(b.name)).filter((_, index) => index % 2 === 0);
            
        }

    },
    extraReducers: {
        [fetchData.fulfilled.type]: (state, action: PayloadAction<IUniversity[]>) => {
            state.isLoading = false;
            state.error = '';
            state.allUniversities = action.payload;
        },
        [fetchData.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchData.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        [fetchUniversities.fulfilled.type]: (state, action: PayloadAction<IUniversity[]>) => {
            state.countryUniversities = action.payload;

        },
        [fetchUniversities.pending.type]: (state) => {
            state.countryUniversities = [];
        },
        [fetchUniversities.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    }
})




export const { getCountries, filterUniversities } = fetchDataSlice.actions;

export default fetchDataSlice.reducer