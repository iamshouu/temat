import {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
  type ReactNode,
  type MouseEvent,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react'

const MouseEnterContext = createContext<[boolean, (b: boolean) => void] | undefined>(undefined)

function useMouseEnter() {
  const ctx = useContext(MouseEnterContext)
  if (!ctx) throw new Error('CardItem must be rendered inside <CardContainer>')
  return ctx
}

type CardContainerProps = {
  children: ReactNode
  className?: string
  containerClassName?: string
}

export function CardContainer({
  children,
  className = '',
  containerClassName = '',
}: CardContainerProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!innerRef.current) return
    const { left, top, width, height } = innerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 22
    const y = (e.clientY - top - height / 2) / 22
    innerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
  }

  const handleMouseEnter = () => setIsMouseEntered(true)

  const handleMouseLeave = () => {
    if (!innerRef.current) return
    setIsMouseEntered(false)
    innerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div className={containerClassName} style={{ perspective: '1000px' }}>
        <div
          ref={innerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative transition-transform duration-200 ease-out ${className}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

type CardBodyProps = {
  children: ReactNode
  className?: string
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return (
    <div
      className={`[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] ${className}`}
    >
      {children}
    </div>
  )
}

type CardItemProps<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
} & Omit<ComponentPropsWithoutRef<T>, 'children' | 'className'>

export function CardItem<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps<T>) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement>(null)
  const [isMouseEntered] = useMouseEnter()

  useEffect(() => {
    if (!ref.current) return
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    } else {
      ref.current.style.transform =
        'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ])

  return (
    <Tag
      ref={ref as never}
      className={`transition-transform duration-200 ease-out ${className}`}
      {...(rest as ComponentPropsWithoutRef<ElementType>)}
    >
      {children}
    </Tag>
  )
}
