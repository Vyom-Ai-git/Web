import React from 'react'
import { cn } from '@/lib/utils'

interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  hoverable?: boolean
  intensity?: 'low' | 'medium' | 'high'
}

export const Glass: React.FC<GlassProps> = ({
  children,
  className,
  as: Component = 'div',
  hoverable = false,
  intensity = 'medium',
  ...props
}) => {
  return (
    <Component
      className={cn(
        'glass-card rounded-lg',
        intensity === 'low' && 'bg-glass-bg/20 backdrop-blur-[6px] border-white/20',
        intensity === 'medium' && 'bg-glass-bg/42 backdrop-blur-[12px] border-white/30',
        intensity === 'high' && 'bg-glass-bg/60 backdrop-blur-[20px] border-white/40',
        hoverable && 'glass-card-hover',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Glass
