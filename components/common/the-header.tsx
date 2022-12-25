import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const TheHeader = () => {
    return (
        <Box
            as="nav"
            h={12}
            bg="yellow.400"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Text fontWeight="bold">Food ordering</Text>
        </Box>
    )
}

export default TheHeader
