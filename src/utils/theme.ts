import storage from "./storage"
import {THEME} from 'constants/storage-keys'

export const getTheme = () => {
    const ret = storage.get(THEME)
    if(!ret) { setTheme('dark') }
    return ret || 'dark'
}

export const setTheme = (theme: 'light' | 'dark') => {
    storage.set(THEME,theme)
}