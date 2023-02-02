import { database } from '@/config/firebaseConfig'
import { doc, DocumentData, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export function useFirebaseCollection(collectionName: string, segment: string) {
    const [data, setData] = useState<DocumentData>()
    const docRef = doc(database, collectionName, segment)

    useEffect(() => {
        async function initCollection() {
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const docData = docSnap.data()
                setData(docData)
            }

            setData(undefined)
        }

        initCollection()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        data,
    }
}
