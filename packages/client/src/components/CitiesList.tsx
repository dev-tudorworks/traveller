import React from 'react'
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
} from '@chakra-ui/react'

import { Button } from './Button'

import { getFilteredCities } from '../utils/getFilteredCities'

import type { City } from '../../../api/src/cities/types'

export const CitiesList: FC = ({ queryValue, queryType }) => {
  const { error, loading, data } = getFilteredCities({ [queryType]: queryValue })

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>We don't know where you've been!</AlertTitle>
          <AlertDescription>Please try again later.</AlertDescription>
        </Alert>
      )}
      {!error && loading && <Spinner />}
      {!error && !loading && !data?.cities?.total && (
        <Alert status="warning">
          <AlertIcon />
          <AlertTitle mr={2}>You need to travel more!</AlertTitle>
          <AlertDescription>Please add some cities to this list.</AlertDescription>
        </Alert>
      )}
      {!error && !loading && !!data?.cities?.total && (
        <UnorderedList className="search-result-items" flexGrow="1" margin="0">
          {data?.cities?.cities.map((city: City) => (
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
              <Button isChecked={city.visited} type="visited" id={city.id} />
              <Button isChecked={city.wishlist} type="wishlist" id={city.id} />
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </>
  )
}
