import { useEffect, useState } from 'react'
import { IMenu } from '../types/IMenu'

export function useMenu() {
    const [menu, setMenu] = useState<IMenu>()

    useEffect(() => {
        async function initMenu() {
            const data = await import('@/data/truckstop.json')

            setMenu(data.default)
        }
        initMenu()
    }, [])

    return { menu }
}
