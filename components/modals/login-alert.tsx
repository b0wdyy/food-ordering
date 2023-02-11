import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from '@chakra-ui/react'

interface ModalsLoginAlertProps {
    open: boolean
    onClose: () => void
}

const ModalsLoginAlert: React.FC<ModalsLoginAlertProps> = ({
    open,
    onClose,
}) => {
    return (
        <Modal isOpen={open} onClose={onClose} size="sm" isCentered>
            <ModalOverlay />

            <ModalContent>
                <ModalHeader>Oh-oh!</ModalHeader>

                <ModalCloseButton />

                <ModalBody>
                    <Text>
                        Please make an account to continue, or log into an
                        existing account.
                    </Text>
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
