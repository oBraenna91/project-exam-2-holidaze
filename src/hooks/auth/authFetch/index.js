import * as storage from '../../../storage/index.js'

export function header() {
    const token = storage.getLocalStorageItem('token');
    return {
        'Content-Type' : 'application/json',
        Authorization: `Bearer ${token}`
    }
};

export function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: header()
    })
};