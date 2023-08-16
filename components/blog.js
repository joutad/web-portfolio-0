import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/blogs" style={useColorModeValue({color: '#1a202c'}, {})}>
      Blogs
    </Link>
    {/* {useColorMode().colorMode === 'dark' ?
    <Link as={NextLink} href="/blogs">
      Blogs
    </Link>:
    <Link as={NextLink} href="/blogs" style={{color: '#ffffffeb'}}>
      Blogs
    </Link>} */}
      {/* Blogs */}
    {/* </Link> */}
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const BlogImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
