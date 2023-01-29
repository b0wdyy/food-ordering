import { IMenuItem } from '@/lib/types/IMenu'
import { Flex, IconButton, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

interface MenuItemProps {
    item: IMenuItem
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    return (
        <Flex
            borderColor="gray.200"
            align="center"
            p={2}
            borderRadius="md"
            borderWidth={1}
        >
            <Text flex={1}>{item.name}</Text>
            <IconButton
                size="sm"
                icon={<AddIcon />}
                rounded="full"
                aria-label="add product"
                bg="yellow.100"
                color="yellow.600"
                _active={{ bg: 'yellow.300' }}
                _hover={{ bg: 'yellow.200' }}
            />
        </Flex>
    )
}

export default MenuItem
