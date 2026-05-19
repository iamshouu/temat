import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'

type Props = {
  children: ReactNode
  className?: string
}

export function TracingBeam({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (!contentRef.current) return
    const update = () => {
      if (contentRef.current) setSvgHeight(contentRef.current.offsetHeight)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(contentRef.current)
    return () => ro.disconnect()
  }, [])

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  })
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, Math.max(svgHeight - 200, 0)]),
    { stiffness: 500, damping: 90 },
  )

  return (
    <motion.div ref={ref} className={`relative w-full ${className}`}>
      <div className="absolute left-2 md:left-4 top-3">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? 'none'
                : 'rgba(237,237,237,0.18) 0px 0px 16px',
          }}
          className="ml-[20px] h-4 w-4 rounded-full border border-muted/60 flex items-center justify-center"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? '#525252' : '#EDEDED',
              borderColor: scrollYProgress.get() > 0 ? '#525252' : '#A3A3A3',
            }}
            className="h-2 w-2 rounded-full border bg-text"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-3 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#525252"
            strokeOpacity="0.25"
            transition={{ duration: 10 }}
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#tracing-gradient)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          />
          <defs>
            <motion.linearGradient
              id="tracing-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#FFFFFF" stopOpacity="0" />
              <stop stopColor="#FFFFFF" />
              <stop offset="0.325" stopColor="#BFBFBF" />
              <stop offset="1" stopColor="#525252" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  )
}
