import React from 'react'
import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import { useUser } from '@/lib/context/user-context'

export const Avatar: React.FC = () => {
    const {
        user: { avatar, username },
    } = useUser()

    return (
        <ChakraAvatar
            size="sm"
            name={username}
            src={`/assets/svg/avatars/${avatar}.svg`}
        ></ChakraAvatar>
    )
}
