import { Text } from '@chakra-ui/react'
import React from 'react'

export const OrderAmount = () => {
    return (
        <Text
            h={8}
            w={8}
            display="inline-grid"
            placeItems="center"
            borderRadius="full"
            bg="gray.400"
            fontWeight="bold"
            color="white"
        >
            8
        </Text>
    )
}
