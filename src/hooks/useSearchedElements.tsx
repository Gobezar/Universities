import { useMemo } from "react";
import { IUniversity } from "../models";



export const useSearchedElements= (currentPageUniversities:IUniversity[] , searchText: string) => {
    const searchedElements = useMemo(() => {
        return currentPageUniversities.filter(elem => elem.name.toLowerCase().includes(searchText.toLowerCase()))
      }, [searchText, currentPageUniversities])
    return searchedElements;
}