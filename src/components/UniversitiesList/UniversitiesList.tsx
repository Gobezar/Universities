import React from 'react'
import { IUniversity } from '../../models';

import '../UniversitiesList/UniversitiesList.css'

interface UniversitiesListProps {
  searchedElements: IUniversity[]
}


const UniversitiesList: React.FC<UniversitiesListProps> = ({ searchedElements }) => {


  return (

<div className='universitiesList__wrapper'>
<ul>
  {searchedElements?.map((c, index) => (
      <div key={c.name} className={`universityList__item ${index % 2 === 0 ? 'even' : 'odd'}`}>
        <li>
          <div>{c.name} {c.alpha_two_code}</div>
          <div>
            <span>Официальный сайт доступен по: </span>
            <a href={c.web_pages[0]}>ссылке</a>
          </div>
        </li>
      </div>
  ))}
  </ul>
</div>
  )
}

export default UniversitiesList;