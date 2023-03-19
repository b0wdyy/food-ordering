import { UserService } from '@/lib/services/user.service'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useUser } from 'lib/context/user-context'
import React from 'react'
import { Avatar } from './ui/avatar'

const AvatarMenu = () => {
    const { setUser, user } = useUser()

    const onLogoutClick = async () => {
        try {
            await UserService.logoutUser()
            setUser({
                isLoggedIn: false,
                email: 'john.doe@continuum.be',
                avatar: 'default',
            })
        } catch (e) {}
    }
    return (
        <Menu>
            <MenuButton rightIcon={<Avatar />} as={Button} colorScheme="yellow">
                {user.email}
            </MenuButton>

            <MenuList>
                <MenuItem>Avatar veranderen</MenuItem>
                <MenuItem onClick={onLogoutClick}>Logout</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default AvatarMenu
