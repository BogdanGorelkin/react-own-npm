import { useState } from 'react'

export function useTestState() {
  const [state, setState] = useState()
  
  return {state, setState}
}