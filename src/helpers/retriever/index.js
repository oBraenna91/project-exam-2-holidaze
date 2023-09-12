import { getLocalStorageItem } from "../../storage";

export function retrieveName() {
    const {name: userName} = getLocalStorageItem('user');
    return userName;
}
export default retrieveName;