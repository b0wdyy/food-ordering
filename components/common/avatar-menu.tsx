import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

const AvatarMenu = () => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="yellow"
            >
                John Doe
            </MenuButton>

            <MenuList>
                <MenuItem>Avatar veranderen</MenuItem>
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default AvatarMenu
