import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useMenuOrders } from '@/lib/context/order-context'

interface MenuOverviewProps {}

const MenuOverview: React.FC<MenuOverviewProps> = () => {
    const {
        state: { orders },
    } = useMenuOrders()

    return orders.length ? (
        <Box
            borderColor="gray.200"
            p={2}
            borderRadius="md"
            borderWidth={1}
            mb={2}
        >
            {orders.map((order) => (
                <Text key={order.name}>
                    {order.name} - {order.amount}
                </Text>
            ))}
        </Box>
    ) : (
        <Text
            borderColor="gray.200"
            p={2}
            borderRadius="md"
            borderWidth={1}
            mb={2}
        >
            Pick something from the menu to get started!
        </Text>
    )
}

export default MenuOverview
