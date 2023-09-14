import { useEffect } from "react"

export function useTestEffect(formData: any) {
  useEffect(() => {
    const test = setInterval(() => {
      console.log('aaa')
    }, 1000)
    return () => {
      clearInterval(test)
    }
  }, [])
}
