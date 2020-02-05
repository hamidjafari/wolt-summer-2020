export const getPos = async () =>
    new Promise((res, rej) => {
        if (!navigator.geolocation) {
            rej()
        } else {
            navigator.geolocation.getCurrentPosition(res, rej)
        }
    })

export const calcDistance = (lat1, long1, lat2, long2) => {
    var p = 0.017453292519943295
    var c = Math.cos
    var a =
        0.5 -
        c((lat2 - lat1) * p) / 2 +
        (c(lat1 * p) * c(lat2 * p) * (1 - c((long2 - long1) * p))) / 2
    return 12742 * Math.asin(Math.sqrt(a))
}
