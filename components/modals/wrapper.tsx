import {
    ModalsActionsEnum,
    ModalsState,
    useModal,
} from '@/lib/context/modals-context'
import React from 'react'
import ModalsAvatar from './avatar'
import ModalsLoginAlert from './login-alert'

const ModalsWrapper: React.FC = () => {
    const { state, dispatch } = useModal()

    const onCloseModal = (modalName: keyof ModalsState) => {
        dispatch({
            type: ModalsActionsEnum.CLOSE_MODAL,
            payload: modalName,
        })
    }

    return (
        <>
            <ModalsLoginAlert
                onClose={() => onCloseModal('loginAlertOpen')}
                open={state.loginAlertOpen}
            />

            <ModalsAvatar
                onClose={() => onCloseModal('avatarOpen')}
                open={state.avatarOpen}
            />
        </>
    )
}

export default ModalsWrapper
