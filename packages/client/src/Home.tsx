import React, { useState } from 'react'
import type { FC } from 'react'
import { Container, InputRightElement, Input, Heading, InputGroup, IconButton, VStack } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

import { CitiesList } from './components/CitiesList'

export const Home: FC = () => {
  const [queryValue, setQueryValue] = useState('')

  const handleSearch = (value: string) => {
    setQueryValue(value)
  }

  return (
    <VStack spacing="8">
      <Heading as="h1" marginBottom="16px">
        Smart traveller
      </Heading>
      <Container maxW="container.md">
        <InputGroup marginBottom="16px">
          <Input
            onChange={e => handleSearch(e.target.value)}
            value={queryValue}
            maxlength="256"
            placeholder="Search for cities..."
            type="search"
            name="query"
            aria-label="Search"
          />
          <InputRightElement children={<IconButton aria-label="" icon={<Search2Icon />} />} />
        </InputGroup>
        <CitiesList queryValue={queryValue} queryType="name" />
      </Container>
    </VStack>
  )
}
