import { useEffect } from 'react'

export function useTestEffect() {
  useEffect(() => {
    const test = setInterval(() => {
      console.log('aaa')
    }, 1000)
    return () => {
      clearInterval(test)
    }
  }, [])
}