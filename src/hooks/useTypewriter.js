import { useState, useEffect, useRef } from 'react'

export function useTypewriter(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) {
  const [display, setDisplay] = useState('')
  const stateRef = useRef({
    wordIndex: 0,
    charIndex: 0,
    isDeleting: false,
  })

  useEffect(() => {
    let timeoutId

    function tick() {
      const { wordIndex, charIndex, isDeleting } = stateRef.current
      const word = words[wordIndex]

      if (!isDeleting) {
        const next = charIndex + 1
        setDisplay(word.slice(0, next))
        stateRef.current.charIndex = next

        if (next === word.length) {
          stateRef.current.isDeleting = true
          timeoutId = setTimeout(tick, pauseTime)
          return
        }
        timeoutId = setTimeout(tick, typingSpeed)
      } else {
        const next = charIndex - 1
        setDisplay(word.slice(0, next))
        stateRef.current.charIndex = next

        if (next === 0) {
          stateRef.current.isDeleting = false
          stateRef.current.wordIndex = (wordIndex + 1) % words.length
          timeoutId = setTimeout(tick, typingSpeed)
          return
        }
        timeoutId = setTimeout(tick, deletingSpeed)
      }
    }

    timeoutId = setTimeout(tick, typingSpeed)

    return () => clearTimeout(timeoutId)
  }, [words, typingSpeed, deletingSpeed, pauseTime])

  return display
}
