import { database } from '@/config/firebaseConfig'
import {
    collection,
    DocumentData,
    getDocs,
    query,
    QueryDocumentSnapshot,
    where,
    WhereFilterOp,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

export function useOrders(firebaseQuery?: string) {
    const [orders, setOrders] =
        useState<QueryDocumentSnapshot<DocumentData>[]>()
    const [fieldPath, whereOp, value] = firebaseQuery
        ? (firebaseQuery.split(', ') as [string, WhereFilterOp, string])
        : (['', '==', ''] as [string, WhereFilterOp, string])
    const docRef = firebaseQuery
        ? query(
              collection(database, 'orders'),
              where(fieldPath, whereOp, value)
          )
        : collection(database, 'orders')

    useEffect(() => {
        async function initCollection() {
            const ordersRef = await getDocs(docRef)
            setOrders(ordersRef.docs)
        }

        initCollection()
    }, [])

    return {
        orders,
    }
}
