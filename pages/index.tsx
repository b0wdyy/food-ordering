import { Box, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
    return (
        <Box as="section" display="grid" placeItems="center">
            <Link passHref href="/orders">
                <Button mt={12}>Stel een lijst op</Button>
            </Link>
        </Box>
    )
}
