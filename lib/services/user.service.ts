import { auth, database } from '@/config/firebaseConfig'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export class UserService {
    private static async createUser(id: string, email: string) {
        // implement
        setDoc(doc(database, 'users', id), {
            email,
            avatar: 'default',
        })
    }

    static async getUserById(id: string) {
        const docRef = doc(database, 'users', id)
        const docData = await getDoc(docRef)
        return docData
    }

    static async isUserInDb(id: string) {
        const snapshot = await this.getUserById(id)
        return snapshot.exists()
    }

    static async logoutUser() {
        return signOut(auth)
    }

    static async loginUser() {
        const provider = new GoogleAuthProvider()
        try {
            const response = await signInWithPopup(auth, provider)
            if (response.user) {
                const isUserInDb = await this.isUserInDb(response.user.uid)
                if (!isUserInDb && response.user.email) {
                    await this.createUser(
                        response.user.uid,
                        response.user.email
                    )
                }
            }

            return this.getUserById(response.user.uid)
        } catch (e) {
            console.log('dit is een error', e)
        }
    }
}
