import React from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

// Easing curves configuration
export const EASINGS = {
  gentle: [0.25, 0.8, 0.25, 1] as const,
  editorial: [0.16, 1, 0.3, 1] as const,
  premium: [0.76, 0, 0.24, 1] as const,
  cinematic: [0.85, 0, 0.15, 1] as const,
}

// Timing durations (in seconds)
export const DURATIONS = {
  'ultra-fast': 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  'extra-slow': 0.8,
}

interface MotionBaseProps extends HTMLMotionProps<'div'> {
  delay?: number
  duration?: keyof typeof DURATIONS | number
  easing?: keyof typeof EASINGS
}

/**
 * Fade transition preset (supports directional offsets)
 */
export const Fade: React.FC<MotionBaseProps & { direction?: 'up' | 'down' | 'left' | 'right' | 'none' }> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 'normal',
  easing = 'editorial',
  ...props
}) => {
  const reducedMotion = useReducedMotion()
  const secDuration = typeof duration === 'number' ? duration : DURATIONS[duration]

  if (reducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: secDuration, delay, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  const offset = 24
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? offset : direction === 'right' ? -offset : 0,
      y: direction === 'up' ? offset : direction === 'down' ? -offset : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{
        duration: secDuration,
        delay,
        ease: EASINGS[easing],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/**
 * Scale reveal preset
 */
export const ScaleReveal: React.FC<MotionBaseProps & { scaleStart?: number }> = ({
  children,
  scaleStart = 0.95,
  delay = 0,
  duration = 'normal',
  easing = 'editorial',
  ...props
}) => {
  const reducedMotion = useReducedMotion()
  const secDuration = typeof duration === 'number' ? duration : DURATIONS[duration]

  if (reducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: secDuration, delay }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: scaleStart }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: secDuration,
        delay,
        ease: EASINGS[easing],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/**
 * Blur reveal preset (editorial transition)
 */
export const BlurReveal: React.FC<MotionBaseProps & { blurStart?: number }> = ({
  children,
  blurStart = 8,
  delay = 0,
  duration = 'normal',
  easing = 'editorial',
  ...props
}) => {
  const reducedMotion = useReducedMotion()
  const secDuration = typeof duration === 'number' ? duration : DURATIONS[duration]

  if (reducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: secDuration, delay }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, filter: `blur(${blurStart}px)` }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{
        duration: secDuration,
        delay,
        ease: EASINGS[easing],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/**
 * Scroll Reveal component (triggers entrance when element is visible in viewport)
 */
export const ScrollReveal: React.FC<MotionBaseProps & {
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  triggerOnce?: boolean
  margin?: string
}> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 'normal',
  easing = 'editorial',
  triggerOnce = true,
  margin = '-10%',
  ...props
}) => {
  const reducedMotion = useReducedMotion()
  const secDuration = typeof duration === 'number' ? duration : DURATIONS[duration]

  if (reducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: triggerOnce, margin }}
        transition={{ duration: secDuration, delay }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  const offset = 24
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? offset : direction === 'right' ? -offset : 0,
      y: direction === 'up' ? offset : direction === 'down' ? -offset : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, margin }}
      variants={variants}
      transition={{
        duration: secDuration,
        delay,
        ease: EASINGS[easing],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  staggerChildren?: number
  delayChildren?: number
  triggerOnce?: boolean
  margin?: string
}

/**
 * Parent container to choreograph stagger animations
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerChildren = 0.08,
  delayChildren = 0,
  triggerOnce = true,
  margin = '-10%',
  ...props
}) => {
  const reducedMotion = useReducedMotion()

  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : staggerChildren,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, margin }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/**
 * Children nodes placed within StaggerContainer to slide/fade sequentially
 */
export const StaggerItem: React.FC<MotionBaseProps & { direction?: 'up' | 'down' | 'left' | 'right' | 'none' }> = ({
  children,
  direction = 'up',
  duration = 'normal',
  easing = 'editorial',
  ...props
}) => {
  const reducedMotion = useReducedMotion()
  const secDuration = typeof duration === 'number' ? duration : DURATIONS[duration]

  if (reducedMotion) {
    const fadeVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: secDuration } },
    }
    return (
      <motion.div variants={fadeVariants} {...props}>
        {children}
      </motion.div>
    )
  }

  const offset = 20
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? offset : direction === 'right' ? -offset : 0,
      y: direction === 'up' ? offset : direction === 'down' ? -offset : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: secDuration,
        ease: EASINGS[easing],
      },
    },
  }

  return (
    <motion.div variants={itemVariants} {...props}>
      {children}
    </motion.div>
  )
}

/**
 * Page Transition wrapper
 */
export const PageTransition: React.FC<MotionBaseProps> = ({
  children,
  duration = 'slow',
  easing = 'premium',
  ...props
}) => {
  const reducedMotion = useReducedMotion()
  const secDuration = typeof duration === 'number' ? duration : DURATIONS[duration]

  if (reducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: secDuration }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{
        duration: secDuration,
        ease: EASINGS[easing],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
