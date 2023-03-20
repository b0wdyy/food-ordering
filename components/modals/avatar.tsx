import { useUser } from '@/lib/context/user-context'
import { IDefaultModalProps } from '@/lib/types/IModal'
import { getAllAvatars } from '@/lib/utils/svg'
import {
    Avatar,
    Button,
    Divider,
    Flex,
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

const ModalsAvatar: React.FC<IDefaultModalProps> = ({ open, onClose }) => {
    const { user } = useUser()
    const [selectedAvatar, setSelectedAvatar] = useState(user.avatar)
    const avatars = getAllAvatars
        .keys()
        .filter((key) => key.includes('public'))
        .map((key) => key.substring(6))

    const onSave = () => {
        console.log({ selectedAvatar })
    }

    return (
        <Modal isOpen={open} onClose={onClose} size="sm" isCentered>
            <ModalOverlay />

            <ModalContent>
                <ModalHeader>Change your avatar</ModalHeader>

                <ModalCloseButton />

                <ModalBody>
                    <Text>
                        Choose from the list below to get a new avatar look!
                    </Text>

                    <Divider borderColor="gray.800" rounded="md" my={4} />

                    <Flex wrap="wrap" gap={2} h="full" w="full">
                        {/* TODO: extract to its own component  */}
                        {avatars.map((avatar) => (
                            <Avatar
                                key={avatar}
                                src={avatar}
                                borderWidth={
                                    avatar.substring(
                                        avatar.lastIndexOf('/') + 1,
                                        avatar.lastIndexOf('.')
                                    ) === selectedAvatar
                                        ? 4
                                        : 0
                                }
                                borderColor="red.400"
                            />
                        ))}
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button
                        mr={2}
                        onClick={onClose}
                        variant="outline"
                        colorScheme="yellow"
                    >
                        Close
                    </Button>

                    <Button onClick={onSave} colorScheme="yellow">
                        Save avatar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalsAvatar
