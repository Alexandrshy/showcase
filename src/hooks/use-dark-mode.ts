import { useEffect } from "react"

import { THEME, DATA_NAME_THEME, LOCAL_STORAGE_THEME } from "../constants"
import useLocalStorage from "./use-local-storage"
import useMedia from "./use-media"

const usePrefersDarkMode = () => {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false)
}

export default function useDarkMode() {
  const [state, setState] = useLocalStorage(LOCAL_STORAGE_THEME)
  const prefersDarkMode = usePrefersDarkMode()
  const stateTheme = state || (prefersDarkMode ? THEME.DARK : THEME.LIGHT)

  useEffect(() => {
    const element = window.document.body
    element.setAttribute(DATA_NAME_THEME, stateTheme)
  }, [stateTheme])

  return [stateTheme, setState]
}
