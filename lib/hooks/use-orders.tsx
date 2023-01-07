import { database } from '@/config/firebaseConfig'
import {
    collection,
    DocumentData,
    getDocs,
    QuerySnapshot,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

export function useOrders() {
    const [docSnap, setDocSnap] = useState<QuerySnapshot<DocumentData>>()
    const docRef = collection(database, 'orders')

    useEffect(() => {
        async function initCollection() {
            const docSnap = await getDocs(docRef)
            setDocSnap(docSnap)
        }

        initCollection()
    }, [])

    return {
        docSnap,
    }
}
