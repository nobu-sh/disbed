import { useEffect, useState } from 'react'
import { RecoilRoot } from 'recoil'
import Router from '../router'
import './App.scss'

// Imports states. There is some preinitialization that occurs.
import '../state'
import Overlays from './Overlays'

function App() {

  // Konami >-<
  const [keysPressed, setKeysPressed] = useState<string[]>([])
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () =>
      document.removeEventListener('keydown', handleKeyDown)
  }, [keysPressed])
  function handleKeyDown(e: KeyboardEvent): void {
    const keys = [...keysPressed, e.key]

    if (keys.length > 10) keys.shift()
    if (JSON.stringify([ "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a" ]) === JSON.stringify(keys))
      document.body.parentElement?.toggleAttribute('konami')

    setKeysPressed(keys)
  }

  return (
    <RecoilRoot>
      <div className="App">
        <Router />
        <Overlays />
      </div>
    </RecoilRoot>
  )
}

export default App
