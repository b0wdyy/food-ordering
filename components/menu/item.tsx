import { IMenuItem } from '@/lib/types/IMenu'
import { Box, IconButton, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

interface MenuItemProps {
    item: IMenuItem
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    return (
        <Box>
            <Text>{item.name}</Text>
            <IconButton
                icon={<AddIcon />}
                rounded="full"
                aria-label="add product"
                bg="yellow.200"
                colorScheme="yellow"
            />
        </Box>
    )
}

export default MenuItem