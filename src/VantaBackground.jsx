import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { color } from "three/tsl"
import NET from "vanta/dist/vanta.net.min"

const VantaBackground = () => {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x26a72d,
          backgroundColor: 0x41125,
          points: 13.00,
          maxDistance: 40.00,
          spacing: 20.00
        })
        -
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  )
}

export default VantaBackground
