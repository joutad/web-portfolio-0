import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" style={{fontFamily: 'Manrope'}}>
      &copy; {new Date().getFullYear()} Joudat Haroon. All Rights Reserved.
    </Box>
  )
}

export default Footer
