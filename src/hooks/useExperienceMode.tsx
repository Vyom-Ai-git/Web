import React, { createContext, useContext, useState, useEffect } from 'react'

export type ExperienceMode = 'Enterprise' | 'Intelligence' | 'Growth'

interface ExperienceModeContextType {
  mode: ExperienceMode
  setMode: (mode: ExperienceMode) => void
  activeCapabilityIdx: number
  setActiveCapabilityIdx: (idx: number) => void
}

const ExperienceModeContext = createContext<ExperienceModeContextType | undefined>(undefined)

const modeToCapabilityMap: Record<ExperienceMode, number> = {
  Enterprise: 4,     // Business Transformation
  Intelligence: 0,   // Enterprise Intelligence Architecture
  Growth: 2,         // Growth Infrastructure
}

export const ExperienceModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ExperienceMode>('Intelligence')
  const [activeCapabilityIdx, setActiveCapabilityIdxState] = useState<number>(0)

  const setMode = (newMode: ExperienceMode) => {
    setModeState(newMode)
    setActiveCapabilityIdxState(modeToCapabilityMap[newMode])
  }

  const setActiveCapabilityIdx = (idx: number) => {
    setActiveCapabilityIdxState(idx)
    // Synchronize mode based on active capability index
    if (idx === 4) {
      setModeState('Enterprise')
    } else if (idx === 0 || idx === 1) {
      setModeState('Intelligence')
    } else if (idx === 2 || idx === 3) {
      setModeState('Growth')
    }
  }

  // Initial sync
  useEffect(() => {
    setActiveCapabilityIdxState(modeToCapabilityMap[mode])
  }, [])

  return (
    <ExperienceModeContext.Provider value={{ mode, setMode, activeCapabilityIdx, setActiveCapabilityIdx }}>
      {children}
    </ExperienceModeContext.Provider>
  )
}

export const useExperienceMode = () => {
  const context = useContext(ExperienceModeContext)
  if (!context) {
    throw new Error('useExperienceMode must be used within an ExperienceModeProvider')
  }
  return context
}
