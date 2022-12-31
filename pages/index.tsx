import { Box, Button, Text } from '@chakra-ui/react'
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
        <Box as="section" m={8}>
            <Text as="h1" fontWeight="bold" fontSize="2xl">
                {greeting()}
            </Text>

            <Link passHref href="/orders">
                <Button bg="yellow.50" color="yellow.600">
                    Stel een lijst op
                </Button>
            </Link>
        </Box>
    )
}
