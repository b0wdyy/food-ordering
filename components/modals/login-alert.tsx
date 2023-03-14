import { auth } from '@/config/firebaseConfig'
import {
    Button,
    Divider,
    Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from '@chakra-ui/react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import GoogleIcon from '../icons/google'

interface ModalsLoginAlertProps {
    open: boolean
    onClose: () => void
}

const ModalsLoginAlert: React.FC<ModalsLoginAlertProps> = ({
    open,
    onClose,
}) => {
    const provider = new GoogleAuthProvider()

    const onButtonClick = async () => {
        console.log('logging in with Google')
        try {
            const response = await signInWithPopup(auth, provider)
            console.log(response)
        } catch (error) {
            console.error(error)
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
