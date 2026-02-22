import { useEffect, useRef, useCallback } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const cursorPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    let animId: number

    function animate() {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.12
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.12
      if (cursorRef.current) {
        cursorRef.current.style.left = cursorPos.current.x + 'px'
        cursorRef.current.style.top = cursorPos.current.y + 'px'
      }
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [])

  const handleHoverIn = useCallback(() => {
    cursorRef.current?.classList.add(styles.hovering)
  }, [])

  const handleHoverOut = useCallback(() => {
    cursorRef.current?.classList.remove(styles.hovering)
  }, [])

  useEffect(() => {
    function addListeners() {
      document.querySelectorAll('.hoverable').forEach((el) => {
        el.addEventListener('mouseenter', handleHoverIn)
        el.addEventListener('mouseleave', handleHoverOut)
      })
    }

    // Run initially and on DOM changes
    addListeners()
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      document.querySelectorAll('.hoverable').forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverIn)
        el.removeEventListener('mouseleave', handleHoverOut)
      })
    }
  }, [handleHoverIn, handleHoverOut])

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={dotRef} className={styles.dot} />
    </>
  )
}
