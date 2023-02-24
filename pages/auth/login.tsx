import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { NextPage } from 'next'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/config/firebaseConfig'

const Login: NextPage = () => {
    const onButtonClick = async () => {
        const provider = new GoogleAuthProvider()

        try {
            console.log('signing in with Google')
            const result = await signInWithPopup(auth, provider)
            console.log(result.user)
        } catch (e) {
            console.log({ message: e.message })
        }
    }

    return (
        <Box>
            <Text>Login page</Text>
            <Button onClick={onButtonClick}>Sign in with Google</Button>
        </Box>
    )
}

export default Login
