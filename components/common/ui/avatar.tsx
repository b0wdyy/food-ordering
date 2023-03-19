import React from 'react'
import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import { useUser } from '@/lib/context/user-context'

export const Avatar: React.FC = () => {
    const {
        user: { avatar, email },
    } = useUser()

    return (
        <ChakraAvatar
            size="sm"
            name={email}
            src={`/assets/svg/avatars/${avatar}.svg`}
        ></ChakraAvatar>
    )
}
