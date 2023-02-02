import { ButtonPrimary } from '@/components/buttons/primary'
import Menu from '@/components/menu'
import MenuOverview from '@/components/menu/overview'
import { MenuOrdersProvider } from '@/lib/context/order-context'
import { useMenu } from '@/lib/hooks/use-menu'
import { Box, Container, Input, Text } from '@chakra-ui/react'
import React from 'react'

const NewOrder: React.FC = () => {
    const { menu } = useMenu()

    return (
        <MenuOrdersProvider>
            <Container py={4}>
                <Box>
                    <MenuOverview />

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
        </MenuOrdersProvider>
    )
}

export default NewOrder
