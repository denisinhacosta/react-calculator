import styled from 'styled-components'
import { useCalculator } from '../../Hooks/useCalculator'
import { ButtonLabels, ButtonTypes } from '../../types'
import { getButtonType } from '../../utils'

const StyledButton = styled.button`
box-sizing: border-box;
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-weight: bold;
  color: white;
  font-size: 2rem;

  &.${ButtonTypes.NUMBERS} {
    background-color: darkgray;
  }

  &.${ButtonTypes.OPERATORS} {
    background-color: darkorange;
  }

  &.${ButtonTypes.DOT} {
    background-color: darkgray;
  }

  &.${ButtonTypes.CLEAR} {
    background-color: red;
  }

  &.${ButtonTypes.BACKSPACE} {
    background-color: red;
  }

  &.${ButtonTypes.EQUAL} {
    background-color: green;
  }

  &.${ButtonTypes.OPERATORS}.current {
    outline: 3px solid blue;
  }
`

type Props = {
  label: ButtonLabels
}

const Button = (props: Props) => {
  const { label } = props

  const { currentOperator, handleButtonClick } = useCalculator();

  const onClick = () => handleButtonClick(label)

  const isCurrentOperator = currentOperator === label
  return (
    <StyledButton
      type="button"
      className={`${getButtonType(label)} ${isCurrentOperator ? 'current' : ''}`}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  )
}

export default Button