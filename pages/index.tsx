import { ButtonPrimary } from '@/components/buttons/primary'
import { OrderAmount } from '@/components/orders/order-amount'
import { AddIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
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
                {greeting()}
            </Text>

            <Text color="gray.500">
                Orders vandaag <OrderAmount />
            </Text>

            <Link passHref href="/orders">
                <ButtonPrimary
                    shadow="lg"
                    position={['fixed', 'static']}
                    bottom={8}
                    right={8}
                    borderRadius="full"
                    text="Stel een lijst op"
                    leftIcon={<AddIcon />}
                />
            </Link>
        </Box>
    )
}
