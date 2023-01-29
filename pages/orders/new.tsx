import { ButtonPrimary } from '@/components/buttons/primary'
import Menu from '@/components/menu'
import { useMenu } from '@/lib/hooks/use-menu'
import { useOrders } from '@/lib/hooks/use-orders'
import { Box, Container, Input, Text } from '@chakra-ui/react'
import React from 'react'

const NewOrder: React.FC = () => {
    const { orders } = useOrders()
    const { menu } = useMenu()

    return (
        <Container py={4}>
            <Box>
                <Text
                    borderColor="gray.200"
                    p={2}
                    borderRadius="md"
                    borderWidth={1}
                    mb={2}
                >
                    Pick something from the menu to get started!
                </Text>

                <Box mb={2}>
                    <Input placeholder="Order notes (optional)" />
                </Box>

                <ButtonPrimary width="100%" text="Place order" />
            </Box>

            <Text as="h1" fontWeight="bold" fontSize="2xl" my={4}>
                Your order
            </Text>

            <Box my={2}>
                <Menu data={menu} />
            </Box>
        </Container>
    )
}

export default NewOrder
