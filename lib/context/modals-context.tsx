import React, { createContext, Dispatch, useContext, useReducer } from 'react'

interface ModalsState {
    loginAlertOpen: boolean
}

export enum ModalsActionsEnum {
    OPEN_MODAL,
    CLOSE_MODAL,
}

interface ModalsActionDefault {
    payload: keyof ModalsState
}

interface OpenModal extends ModalsActionDefault {
    type: ModalsActionsEnum.OPEN_MODAL
}

interface CloseModal extends ModalsActionDefault {
    type: ModalsActionsEnum.CLOSE_MODAL
}

type ModalsActions = CloseModal | OpenModal

const initialState: ModalsState = {
    loginAlertOpen: false,
}

const ModalsContext = createContext<{
    state: ModalsState
    dispatch: Dispatch<ModalsActions>
}>({ state: initialState, dispatch: () => undefined })

export function modalsReducer(state: ModalsState, action: ModalsActions) {
    switch (action.type) {
        case ModalsActionsEnum.CLOSE_MODAL:
            return {
                ...state,
                [action.payload]: false,
            }

        case ModalsActionsEnum.OPEN_MODAL:
            return {
                ...state,
                [action.payload]: true,
            }

        default:
            return state
    }
}

interface ModalsProviderProps {
    children: React.ReactNode
}

export function ModalsProvider({ children }: ModalsProviderProps) {
    const [state, dispatch] = useReducer(modalsReducer, initialState)

    return (
        <ModalsContext.Provider value={{ state, dispatch }}>
            {children}
        </ModalsContext.Provider>
    )
}

export function useModal() {
    const context = useContext(ModalsContext)

    if (context === undefined) {
        throw new Error('useModal should be use within a ModalsProvider')
    }

    return context
}
