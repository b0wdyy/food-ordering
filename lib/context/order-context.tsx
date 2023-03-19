import React, {
    createContext,
    Dispatch,
    useContext,
    useMemo,
    useReducer,
} from 'react'
import { IMenuItem } from '../types/IMenu'

interface MenuOrders extends IMenuItem {
    amount: number
}

interface MenuOrderState {
    orders: MenuOrders[]
}

export enum OrderActionsEnum {
    ADD_TO_ORDER,
    REMOVE_FROM_ORDER,
}

interface RemoveFromOrder {
    type: OrderActionsEnum.REMOVE_FROM_ORDER
    payload: IMenuItem
}

interface AddToOrder {
    type: OrderActionsEnum.ADD_TO_ORDER
    payload: IMenuItem
}

type MenuOrderActions = RemoveFromOrder | AddToOrder

const initialState = {
    orders: [],
}

const MenuOrdersContext = createContext<{
    state: MenuOrderState
    dispatch: Dispatch<MenuOrderActions>
}>({ state: initialState, dispatch: () => undefined })

export function orderReducer(
    state: MenuOrderState,
    action: MenuOrderActions
): MenuOrderState {
    switch (action.type) {
        case OrderActionsEnum.ADD_TO_ORDER:
            const ordersIndex = state.orders.findIndex(
                (order) => order.name === action.payload.name
            )

            if (ordersIndex !== -1) {
                state.orders[ordersIndex].amount += 1
                return {
                    ...state,
                }
            }
            state.orders.push({ ...action.payload, amount: 1 })

            return {
                ...state,
            }
        default:
            return state
    }
}

interface MenuOrdersProviderProps {
    children: React.ReactNode
}

function MenuOrdersProvider({ children }: MenuOrdersProviderProps) {
    const [state, dispatch] = useReducer(orderReducer, initialState)
    const value = useMemo(() => ({ state, dispatch }), [state])
    return (
        <MenuOrdersContext.Provider value={value}>
            {children}
        </MenuOrdersContext.Provider>
    )
}

function useMenuOrders() {
    const context = useContext(MenuOrdersContext)

    if (context === undefined) {
        throw new Error(
            'useMenuOrders should be used within a MenuOrdersProvider'
        )
    }

    return context
}

export { MenuOrdersProvider, useMenuOrders }
