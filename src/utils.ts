import { ButtonLabels, ButtonTypes } from "./types"

export const getButtonType = (label: ButtonLabels) => {
  const operatorTypes = [
    ButtonLabels.ADDITION,
    ButtonLabels.SUBTRACTION,
    ButtonLabels.MULTIPLICATION,
    ButtonLabels.DIVISION,
    
  ]

  if (operatorTypes.includes(label)) return ButtonTypes.OPERATORS

  switch (label) {
    case ButtonLabels.CLEAR: return ButtonTypes.CLEAR
    case ButtonLabels.EQUAL: return ButtonTypes.EQUAL
    case ButtonLabels.BACKSPACE: return ButtonTypes.BACKSPACE
    case ButtonLabels.DOT: return ButtonTypes.DOT
    default: return ButtonTypes.NUMBERS
  }
}