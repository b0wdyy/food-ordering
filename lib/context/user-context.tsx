import React, { createContext, useContext, useMemo, useState } from 'react'

type UserState = { username: string; avatar: string }
type UserProviderProps = { children: React.ReactNode }

const UserContext = createContext<
    | {
          user: UserState
          setUser: any
      }
    | undefined
>(undefined)

function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<UserState>(() => ({
        avatar: 'default',
        username: 'John Doe',
    }))

    const value = useMemo(() => ({ user, setUser }), [user])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

function useUser() {
    const context = useContext(UserContext)

    if (context === undefined) {
        throw new Error('useUser should be used within a UserProvider')
    }

    return context
}

export { UserProvider, useUser }
