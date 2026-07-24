import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  grid?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = 'div',
  grid = false,
  maxWidth = 'xl',
  ...props
}) => {
  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 md:px-6 lg:px-8',
        maxWidth === 'xl' && 'max-w-[1280px]',
        maxWidth === 'lg' && 'max-w-[1024px]',
        maxWidth === 'md' && 'max-w-[768px]',
        maxWidth === 'sm' && 'max-w-[640px]',
        grid ? 'container-grid' : '',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Container
