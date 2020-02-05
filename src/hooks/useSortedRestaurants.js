import { useState, useEffect } from "react"

const funcs = {
    "alphabetically": arr => {
        return arr.sort((a, b) => String(a.name).localeCompare(b.name))
    },
    "delivery price": arr => {
        return arr.sort((a, b) => a.delivery_price - b.delivery_price)
    }

}
export const sortNames = Object.keys(funcs);

export default (restaurants, sortBy) => {
    const [sorted, setSorted] = useState(restaurants);
    useEffect(() => {
        const fn = funcs[sortBy];
        fn && setSorted(fn([...restaurants]));
    }, [restaurants, sortBy])
    return sorted;
}
