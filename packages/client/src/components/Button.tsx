import React from 'react'
import type { FC } from 'react'
import { Checkbox } from '@chakra-ui/react'

import { useMutation, gql } from '@apollo/client'

const UPDATE_CITY = gql`
  mutation UpdateCity($input: CitiesMutationInput) {
    updateCity(input: $input) {
      name
      country
      visited
      wishlist
      id
    }
  }
`

interface ButtonProps {
  isChecked: boolean
  id: number
  type: string
}

export const Button: FC<ButtonProps> = ({ isChecked, id, type }) => {
  const [updateCity] = useMutation(UPDATE_CITY, {
    refetchQueries: ['Cities'],
  })

  const handleChange = (e: any) => {
    updateCity({
      variables: {
        input: {
          id,
          [type]: e.target.checked,
        },
      },
    })
  }

  return (
    <>
      <Checkbox
        className={`set-as-${type}`}
        isChecked={isChecked}
        onChange={handleChange}
        role="checkbox"
        aria-checked={isChecked}
        paddingLeft="8px"
      >
        {type}
      </Checkbox>
    </>
  )
}
