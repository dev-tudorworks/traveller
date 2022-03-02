import { useQuery, gql } from '@apollo/client'

const GET_FILTERED_CITIES = gql`
  query Cities($filter: CitiesFilters) {
    cities(filter: $filter) {
      cities {
        id
        name
        country
        visited
        wishlist
      }
      total
    }
  }
`

interface FilterVariables {
  id?: number
  name?: string
  country?: string
  visited?: boolean
  wishlist?: boolean
}

export const getFilteredCities = (filter: FilterVariables): any => {
  const { error, loading, data } = useQuery(GET_FILTERED_CITIES, {
    variables: {
      filter,
    },
  })

  return { error, loading, data }
}
