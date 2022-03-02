import React from 'react'
import type { FC } from 'react'
import { Container, Heading } from '@chakra-ui/react'

import { CitiesList } from './components/CitiesList'

export const WishList: FC = () => {
  return (
    <>
      <Heading as="h1" marginBottom="16px">
        Wish list
      </Heading>
      <Container centerContent maxW="container.md" flexDir="row">
        <CitiesList queryValue={true} queryType="wishlist" />
      </Container>
    </>
  )
}
