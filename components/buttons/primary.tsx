import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

interface PrimaryButtonProps extends ButtonProps {
    text: string
}

export const ButtonPrimary: React.FC<PrimaryButtonProps> = ({
    text,
    ...rest
}) => {
    return (
        <Button {...rest} color="yellow.600" bg="yellow.50" rounded="lg">
            {text}
        </Button>
    )
}
