import { auth } from '@/config/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { UserService } from '../services/user.service'

interface UserState {
    isLoggedIn: boolean
    email: string
    avatar: string
}
interface UserProviderProps {
    children: React.ReactNode
}

const UserContext = createContext<
    | {
          user: UserState
          setUser: React.Dispatch<React.SetStateAction<UserState>>
      }
    | undefined
>(undefined)

function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<UserState>({
        isLoggedIn: false,
        email: 'john.doe@continuum.be',
        avatar: 'default',
    })

    const value = useMemo(() => ({ user, setUser }), [user])

    const getAndSetUser = async (authUserId: string) => {
        if (await UserService.isUserInDb(authUserId)) {
            const authUser = await UserService.getUserById(authUserId)
            setUser({
                ...authUser.data(),
                isLoggedIn: true,
            } as unknown as UserState)
        }
    }

    useEffect(() => {
        const unsubscription = onAuthStateChanged(auth, async (authUser) => {
            if (authUser) {
                localStorage.setItem('USER_ID', authUser.uid)
                getAndSetUser(authUser.uid)
            }
        })

        async function init() {
            const userId = localStorage.getItem('USER_ID') as string

            if (!userId) return

            getAndSetUser(userId)
        }

        init()

        return () => {
            unsubscription()
        }
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
