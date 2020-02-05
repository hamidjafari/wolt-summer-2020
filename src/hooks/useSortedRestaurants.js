import { useState, useEffect } from "react"

const funcs = {
    "alphabetically": arr => {
        return Promise.resolve(
            arr.sort((a, b) => String(a.name).localeCompare(b.name))
        )
    },
    "delivery price": arr => {
        return Promise.resolve(
            arr.sort((a, b) => a.delivery_price - b.delivery_price)
        )
    }

}
export const sortNames = Object.keys(funcs);

export default (restaurants, sortBy) => {
    const [sorted, setSorted] = useState(restaurants);
    const [sorting, setSorting] = useState(false);
    useEffect(() => {
        const fn = funcs[sortBy];
        if (fn) {
            setSorting(true);
            fn([...restaurants]).then(async res => {
                await fakeAsync(500);
                setSorted(res);
            }).finally(() => setSorting(false));
        }
    }, [restaurants, sortBy])
    return { sorted, sorting };
}

const fakeAsync = delay => new Promise(res => setTimeout(res, delay))