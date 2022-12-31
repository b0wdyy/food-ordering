import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import AvatarMenu from './avatar-menu'

const TheHeader = () => {
    return (
        <Box
            as="nav"
            p={4}
            bg="yellow.400"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
        >
            <Text fontWeight="bold">Food ordering</Text>

            <AvatarMenu />
        </Box>
    )
}

export default TheHeader
