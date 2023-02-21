import { useState, useEffect } from 'react'

const useLoadingScreen = (): { loading: boolean; progress: number } => {
  const [loading, setLoading] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1
        if (newProgress === 100) {
          setLoading(false)
        }
        return newProgress
      })
    }, 30)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return { loading, progress }
}

export default useLoadingScreen
