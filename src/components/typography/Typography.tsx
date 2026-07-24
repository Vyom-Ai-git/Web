import React from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'hero' | 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-lg' | 'nav' | 'label' | 'small' | 'btn'
  as?: React.ElementType
  balance?: boolean
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  variant = 'body',
  as,
  balance = true,
  ...props
}) => {
  const Component =
    as ||
    (variant === 'hero' && 'h1') ||
    (variant === 'display' && 'h1') ||
    (variant === 'h1' && 'h1') ||
    (variant === 'h2' && 'h2') ||
    (variant === 'h3' && 'h3') ||
    (variant === 'h4' && 'h4') ||
    (variant === 'label' && 'span') ||
    (variant === 'small' && 'small') ||
    (variant === 'nav' && 'span') ||
    (variant === 'btn' && 'span') ||
    'p'

  const variantClasses = {
    hero: 'text-hero font-display tracking-tight font-bold leading-[1.05]',
    display: 'text-display font-display tracking-tight font-semibold leading-[1.1]',
    h1: 'text-h1 font-display font-medium tracking-tight',
    h2: 'text-h2 font-display font-medium tracking-tight',
    h3: 'text-h3 font-display font-medium tracking-tight',
    h4: 'text-h4 font-display font-medium tracking-tight',
    'body-lg': 'text-body-lg font-sans font-normal text-primary/90',
    body: 'text-body-base font-sans font-normal text-primary/80',
    nav: 'text-nav font-sans font-medium tracking-normal text-primary/95',
    label: 'text-label font-sans font-semibold tracking-wider uppercase text-muted',
    small: 'text-small font-sans font-normal text-muted',
    btn: 'text-btn font-sans font-medium text-primary',
  }

  return (
    <Component
      className={cn(
        variantClasses[variant],
        balance && 'text-balance',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Typography
