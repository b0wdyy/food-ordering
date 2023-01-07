import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useUser } from 'lib/context/user-context'
import React from 'react'
import { Avatar } from './ui/avatar'

const AvatarMenu = () => {
    const { user } = useUser()

    return (
        <Menu>
            <MenuButton leftIcon={<Avatar />} as={Button} colorScheme="yellow">
                {user?.username}
            </MenuButton>

            <MenuList>
                <MenuItem>Avatar veranderen</MenuItem>
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default AvatarMenu
