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

const ModalsLoginAlert: React.FC = () => {
    return (
        <Modal
            isOpen={true}
            onClose={() => alert('closing')}
            size="sm"
            isCentered
        >
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
                    <Button colorScheme="yellow">Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalsLoginAlert
