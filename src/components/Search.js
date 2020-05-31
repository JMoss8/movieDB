import React, {useCallback, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'

import services from 'services'
import requestHandler from 'utils/requestHandler'
import Carousel from 'modules/Carousel'

const SearchStyled = styled.input`
  display: block;
  width: 100%;
`

let debounce

const searchHandler = (value, searchField, setSearchData) => {
  setSearchData({loading: true})
  return requestHandler(services.search({query: encodeURI(value)}))
    .then(response => {
      if (value === searchField.current.value) { // check if user did not changed the value in the meantime
        setSearchData(response)
      }
    })
}

const Search = ({history, match: {params: {query}}}) => {
  const [searchData, setSearchData] = useState(undefined)
  const searchField = useRef()

  useEffect(() => {
    if (query) { // if query param defined, search on mount
      searchHandler(query, searchField, setSearchData)
    }
  }, [query])

  const onChange = useCallback(({target: {value} = {}}) => {
    if (debounce) clearTimeout(debounce)

    if (!value) { // if input is empty, reset search component
      setSearchData(undefined)
      return
    }

    debounce = setTimeout(() => {
      searchHandler(value, searchField, setSearchData)
        .then(() => history.replace(`/search/${searchField.current.value}`))
    }, 500)
  }, [history])

  return (
    <div>
      <h1>Search</h1>
      <SearchStyled ref={searchField} placeholder='What are you looking for?' onChange={onChange} defaultValue={query}/>

      {searchData && <Carousel title='Search results' items={searchData}/>}
    </div>
  )
}

export default Search
