import React, { useState } from 'react'
import type { FC } from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
  UnorderedList,
  ListItem,
  Text,
  Button,
} from '@chakra-ui/react'

import type { City } from '../../../api/src/cities/types'
import { getFilteredCities } from '../utils/getFilteredCities'
import { PreferenceButton } from './PreferenceButton'

const limit = 20

interface QueryProps {
  queryValue: string | boolean
  queryType: string
}

export const CitiesList: FC<QueryProps> = ({ queryValue, queryType }) => {
  const [resultLimit, setResultLimit] = useState(limit)
  const { error, loading, data } = getFilteredCities(
    {
      [queryType]: queryValue,
    },
    resultLimit
  )

  const renderAlert = (hasError: boolean) => {
    const alertStatus = hasError ? 'error' : 'warning'
    const alertTitle = hasError ? "We don't know where you've been!" : 'You need to travel more!'
    const alertDescription = hasError ? 'Please try again later.' : 'Please add some cities to this list.'
    return (
      <Alert status={alertStatus}>
        <AlertIcon />
        <AlertTitle mr={2}>{alertTitle}</AlertTitle>
        <AlertDescription>{alertDescription}</AlertDescription>
      </Alert>
    )
  }

  const handleLoadMore = () => {
    setResultLimit(limit + resultLimit)
  }

  const renderList = (cities: [], total: number) => {
    return (
      <>
        <UnorderedList className="search-result-items" flexGrow="1" margin="0 0 16px">
          {cities.map((city: City) => (
            <ListItem
              className="search-result-item"
              key={city.id}
              display="flex"
              flexDirection="row"
              borderBottom="1px solid #1a202c"
              padding="8px"
              boxSizing="border-box"
            >
              <Text className="search-result-text" flexGrow="1" textAlign="left">
                {city.name} ({city.country})
              </Text>
              <PreferenceButton isChecked={city.visited} type="visited" id={city.id} />
              <PreferenceButton isChecked={city.wishlist} type="wishlist" id={city.id} />
            </ListItem>
          ))}
        </UnorderedList>
        {resultLimit < total && <Button onClick={handleLoadMore}>Load more...</Button>}
      </>
    )
  }

  return (
    <>
      {loading && <Spinner />}
      {!loading && error && renderAlert(!!error)}
      {!loading && !error && !data?.cities?.total && renderAlert(!!error)}
      {!loading && !error && !!data?.cities?.total && renderList(data?.cities?.cities, data?.cities?.total)}
    </>
  )
}
