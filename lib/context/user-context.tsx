import { database } from '@/config/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'

interface UserState {
    username: string
    avatar: string
}
interface UserProviderProps {
    children: React.ReactNode
}

const UserContext = createContext<
    | {
          user: UserState
          setUser: any
      }
    | undefined
>(undefined)

function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<UserState>({
        username: 'John Doe',
        avatar: 'default',
    })

    const value = useMemo(() => ({ user, setUser }), [user])

    useEffect(() => {
        async function init() {
            const username = localStorage.getItem('USERNAME') as string

            if (!username) return

            const docRef = doc(database, 'users', username)
            const snapshot = await getDoc(docRef)

            if (snapshot.exists()) {
                const user = snapshot.data()
                setUser(user as UserState)
                return
            }
        }

        init()
    }, [])

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
