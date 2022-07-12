import { createContext, ReactNode, useContext, useState } from 'react';
import { ButtonLabels, ButtonTypes } from '../types'
import { getButtonType } from '../utils'

type UseCalculator = {
  displayValue: string
  currentOperator?: ButtonLabels
  handleButtonClick: (label: ButtonLabels) => void
}

const CalculatorContext = createContext<UseCalculator>({} as UseCalculator)

type CalculatorProviderProps = {
  children: ReactNode
}

const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
  const [displayValue, setDisplayValue] = useState('0')
  const [storedValue, setStoredValue] = useState('')
  const [shouldReplace, setShouldReplace] = useState(false)
  const [currentOperator, setCurrentOperator] = useState<ButtonLabels>()

  const handleNumberClick = (label: ButtonLabels) => {
    if (shouldReplace || displayValue === "0") {
      setDisplayValue(String(label))
      setShouldReplace(false)
      return
    }
    
    if (displayValue.length === 14) return
    
    setDisplayValue(`${displayValue}${label}`)  
  }

  const handleDotClick = (label: ButtonLabels) => {
    if (displayValue === "0" || !displayValue.includes('.')) { 
      setDisplayValue(`${displayValue}${label}`)
      setShouldReplace(false)      
      return     
    }
    if (displayValue.length === 14) return       
  }
  
  const handleOperatorClick = (label: ButtonLabels) => {
    if (!Number(displayValue)) return

    if (currentOperator === label) {
      setCurrentOperator(undefined)
      setShouldReplace(false)
      setStoredValue('')
      return
    }

    setCurrentOperator(label)
    if (!storedValue) setStoredValue(displayValue)
    setShouldReplace(true)
  }

  const handleEqualClick = () => {
    if (!currentOperator || !storedValue || !Number(displayValue)) return
    const result: number = eval(`${storedValue}${currentOperator}${displayValue}`)
    const roundedResult = Math.round((result + Number.EPSILON) * 1000) / 1000
    setDisplayValue(String(roundedResult))
    setStoredValue('')
    setCurrentOperator(undefined)
  }

  const handleClearClick = () => {
    setDisplayValue('0')
    setStoredValue('')
    setShouldReplace(false)
    setCurrentOperator(undefined)
  }

  const handleBackspaceClick = () => {
    if (displayValue.length >= 2) {
      const newDisplayValue = displayValue.substring(0, displayValue.length - 1);
      setDisplayValue(String(`${newDisplayValue}`))      
      return
    }
    setDisplayValue('0')
    setStoredValue('')
    setShouldReplace(false)
    setCurrentOperator(undefined)       
  }

  const handleButtonClick = (label: ButtonLabels) => {
    const buttonType = getButtonType(label)

    switch (buttonType) {
      case ButtonTypes.NUMBERS: {
        handleNumberClick(label)
        break
      }

      case ButtonTypes.DOT: {
        handleDotClick(label)
        break
      }

      case ButtonTypes.OPERATORS: {
        handleOperatorClick(label)
        break
      }

      case ButtonTypes.EQUAL: {
        handleEqualClick()
        break
      }

      case ButtonTypes.BACKSPACE: {
        handleBackspaceClick()
        break
      }

      case ButtonTypes.CLEAR: {
        handleClearClick()
        break
      }
    }
  }

  return (
    <CalculatorContext.Provider
      value={{
        displayValue,
        currentOperator,
        handleButtonClick
      }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}

const useCalculator = (): UseCalculator => useContext(CalculatorContext);

export { useCalculator, CalculatorProvider };