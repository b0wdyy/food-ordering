import { ModalsActionsEnum, useModal } from '@/lib/context/modals-context'
import React from 'react'
import ModalsLoginAlert from './login-alert'

const ModalsWrapper: React.FC = () => {
    const { state, dispatch } = useModal()

    const onCloseModal = () => {
        dispatch({
            type: ModalsActionsEnum.CLOSE_MODAL,
            payload: 'loginAlertOpen',
        })
    }

    return (
        <>
            <ModalsLoginAlert
                onClose={onCloseModal}
                open={state.loginAlertOpen}
            />
        </>
    )
}

export default ModalsWrapper
