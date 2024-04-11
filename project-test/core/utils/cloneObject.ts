export const cloneObject = <T extends Object>(obj: T) => {
    return JSON.parse(JSON.stringify(obj))
}