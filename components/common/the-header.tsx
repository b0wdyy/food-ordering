import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
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
            <Link href="/" passHref>
                <Text fontWeight="bold">Food ordering</Text>
            </Link>

            <AvatarMenu />
        </Box>
    )
}

export default TheHeader
