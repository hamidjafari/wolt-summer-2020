import { useState, useEffect } from "react"
import {getPos,calcDistance} from '../utils/location'

const funcs = {
    alphabetically: async arr => {
        return arr.sort((a, b) => String(a.name).localeCompare(b.name))
    },
    "delivery price": async arr => {
        return arr.sort((a, b) => a.delivery_price - b.delivery_price)
    },
    nearest: async arr => {
        try {
            const position = await getPos()
            const { latitude, longitude } = position.coords
            return arr.sort(
                (a, b) =>
                    calcDistance(latitude, longitude, a.location[0], a.location[1]) -
                    calcDistance(latitude, longitude, b.location[0], b.location[1])
            )
        } catch (error) {
            alert("Unable to retrieve your location")
        }
    },
}
export const sortNames = Object.keys(funcs)

export default (restaurants, sortBy) => {
    const [sorted, setSorted] = useState(restaurants)
    const [sorting, setSorting] = useState(false)
    useEffect(() => {
        const fn = funcs[sortBy]
        if (fn) {
            setSorting(true)
            fn([...restaurants])
                .then(async res => {
                    await fakeAsync(300)
                    setSorted(res)
                })
                .finally(() => setSorting(false))
        }
    }, [restaurants, sortBy])
    return { sorted, sorting }
}

const fakeAsync = delay => new Promise(res => setTimeout(res, delay))