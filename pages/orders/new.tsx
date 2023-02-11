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
                <Text as="h1" fontWeight="bold" fontSize="2xl" mb={4}>
                    Your order
                </Text>

                <Box>
                    <MenuOverview />

                    <Box mb={2}>
                        <Input placeholder="Order notes (optional)" />
                    </Box>

                    <ButtonPrimary width="100%" text="Place order" />
                </Box>

                <Box mt={4}>
                    <Text as="h2" fontWeight="bold" fontSize="xl" mb={4}>
                        Truckstop
                    </Text>
                    <Menu data={menu} />
                </Box>
            </Container>
        </MenuOrdersProvider>
    )
}

export default NewOrder
