import React, { createContext } from 'react'

type Action = { type: 'setUser' } | { type: 'reset' }
type Dispatch = (action: Action) => void
type UserState = { username: string; avatar: string }
type UserProviderProps = { children: React.ReactNode }

const UserStateContext = createContext<
    { state: UserState; dispatch: Dispatch } | undefined
>(undefined)
