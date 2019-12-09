import { useEffect, useState } from "react"

export default function useMedia(
  queries: Array<string>,
  values: Array<boolean>,
  defaultValue: boolean
) {
  const [value, setValue] = useState(defaultValue)
  const mediaQueryLists = queries.map(query => window.matchMedia(query))

  const getValue = () => {
    const index = mediaQueryLists.findIndex(query => query.matches)
    return values[index] ? values[index] : defaultValue
  }

  useEffect(() => {
    setValue(getValue)

    const handler = () => setValue(getValue)

    mediaQueryLists.forEach(mql => mql.addListener(handler))

    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
  }, [])

  return value
}
