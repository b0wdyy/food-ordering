import React from 'react'
import { ButtonPrimary } from '@/components/buttons/primary'
import Menu from '@/components/menu'
import MenuOverview from '@/components/menu/overview'
import { ModalsActionsEnum, useModal } from '@/lib/context/modals-context'
import { useMenuOrders } from '@/lib/context/order-context'
import { useUser } from '@/lib/context/user-context'
import { useMenu } from '@/lib/hooks/use-menu'
import { Box, Container, Input, Text } from '@chakra-ui/react'

const NewOrder: React.FC = () => {
    const { menu } = useMenu()
    const { user } = useUser()
    const { dispatch } = useModal()
    const {
        state: { orders },
    } = useMenuOrders()

    const onAddOrder = () => {
        if (!user.isLoggedIn) {
            dispatch({
                type: ModalsActionsEnum.OPEN_MODAL,
                payload: 'loginAlertOpen',
            })
        }
    }

    return (
        <Container py={4}>
            <Text as="h1" fontWeight="bold" fontSize="2xl" mb={4}>
                Your order
            </Text>

            <Box>
                <MenuOverview />

                <Box mb={2}>
                    <Input placeholder="Order notes (optional)" />
                </Box>

                <ButtonPrimary
                    disabled={orders.length === 0}
                    width="100%"
                    onClick={onAddOrder}
                    text="Place order"
                />
            </Box>

            <Box mt={4}>
                <Text as="h2" fontWeight="bold" fontSize="xl" mb={4}>
                    Truckstop
                </Text>
                <Menu data={menu} />
            </Box>
        </Container>
    )
}

export default NewOrder
