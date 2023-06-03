import React from 'react'

import '../Search/Search.css'


const Search = ({ searchText, setSearchText }: { searchText: string; setSearchText: React.Dispatch<React.SetStateAction<string>> }) => {


  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
      setSearchText(e.currentTarget.value);
    }

  return (
    <div>
      <input
        value={searchText}
        onChange={onChange}
        placeholder='Введите ключевые слова для поиска...'
      />
    </div>
  )
}

export default Search;