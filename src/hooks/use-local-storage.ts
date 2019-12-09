import { useState } from "react"

export default function useLocalStorage(
  key: string,
  initialValue?: { [key: string]: string }
) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: string) => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}
