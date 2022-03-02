import React from 'react'
import type { FC } from 'react'
import { Container, Heading } from '@chakra-ui/react'

import { CitiesList } from './components/CitiesList'

export const Visited: FC = () => {
  return (
    <>
      <Heading as="h1" marginBottom="16px">
        Visited
      </Heading>
      <Container centerContent maxW="container.md" flexDir="row">
        <CitiesList queryValue={true} queryType="visited" />
      </Container>
    </>
  )
}
