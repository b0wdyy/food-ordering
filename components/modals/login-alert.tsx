import { useUser } from '@/lib/context/user-context'
import { UserService } from '@/lib/services/user.service'
import { IDefaultModalProps } from '@/lib/types/IModal'
import {
    Button,
    Divider,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import GoogleIcon from '../icons/google'

const ModalsLoginAlert: React.FC<IDefaultModalProps> = ({ open, onClose }) => {
    const { user } = useUser()
    const [loading, setLoading] = useState(false)

    const onButtonClick = async () => {
        if (user.isLoggedIn) return

        setLoading(true)
        try {
            await UserService.loginUser()
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal isOpen={open} onClose={onClose} size="sm" isCentered>
            <ModalOverlay />

            <ModalContent>
                <ModalHeader>Oh-oh!</ModalHeader>

                <ModalCloseButton />

                <ModalBody>
                    <Text>You need to be logged in to place an order!</Text>

                    <Divider borderColor="gray.800" rounded="md" my={4} />

                    <Button
                        display="flex"
                        gap={4}
                        variant="outline"
                        colorScheme="yellow"
                        onClick={onButtonClick}
                        w="full"
                        isLoading={loading}
                    >
                        <GoogleIcon />
                        Login with Google
                    </Button>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={onClose} colorScheme="yellow">
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalsLoginAlert
