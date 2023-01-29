import React from 'react'
import { ButtonPrimary } from '@/components/buttons/primary'
import { OrderAmount } from '@/components/orders/order-amount'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useUser } from '@/lib/context/user-context'

const Home: React.FC = () => {
    const {
        user: { username },
    } = useUser()
    function greeting() {
        const hours = new Date().getHours()

        if (hours < 12) {
            return 'Good morning'
        } else if (hours < 17) {
            return 'Good afternoon'
        }

        return 'Good evening'
    }

    return (
        <Box as="section" m={8} position="relative">
            <Text as="h1" fontWeight="bold" fontSize="2xl">
                {greeting()}, {username}
            </Text>

            <Box color="gray.500">
                Orders vandaag <OrderAmount />
            </Box>

            <Link passHref href="/orders/new">
                <ButtonPrimary
                    shadow="lg"
                    position={['fixed', 'static']}
                    bottom={8}
                    right={8}
                    borderRadius="full"
                    text="Stel een lijst op"
                />
            </Link>
        </Box>
    )
}

export default Home
