import { Box } from '@chakra-ui/react'
import React from 'react'
import ModalsLoginAlert from './login-alert'

const ModalsWrapper: React.FC = () => {
    return (
        <Box pos="fixed" inset={0}>
            <ModalsLoginAlert />
        </Box>
    )
}

export default ModalsWrapper
