import { useQuery, gql } from '@apollo/client'

const GET_FILTERED_CITIES = gql`
  query Cities($filter: CitiesFilters, $limit: Int) {
    cities(filter: $filter, limit: $limit) {
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

export const getFilteredCities = (filter: FilterVariables, limit: number): any => {
  const { error, loading, data } = useQuery(GET_FILTERED_CITIES, {
    variables: {
      filter,
      limit,
    },
  })

  return { error, loading, data }
}
