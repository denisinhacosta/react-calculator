import { Container, Display, Row, Button } from './Components'
import { CalculatorProvider, useCalculator } from './Hooks/useCalculator'
import { ButtonLabels } from './types'

const App = () => {
  const { displayValue } = useCalculator()

  return (
    <Container>
      <Row>
        <Display>
          {displayValue}
        </Display>
      </Row>
      <Row>
        <Button label={ButtonLabels.SEVEN} />
        <Button label={ButtonLabels.EIGHT} />
        <Button label={ButtonLabels.NINE} />
        <Button label={ButtonLabels.DIVISION} />
      </Row>
      <Row>
        <Button label={ButtonLabels.FOUR} />
        <Button label={ButtonLabels.FIVE} />
        <Button label={ButtonLabels.SIX} />
        <Button label={ButtonLabels.MULTIPLICATION} />
      </Row>
      <Row>
        <Button label={ButtonLabels.ONE} />
        <Button label={ButtonLabels.TWO} />
        <Button label={ButtonLabels.THREE} />
        <Button label={ButtonLabels.SUBTRACTION} />
      </Row>
      <Row>
        <Button label={ButtonLabels.CLEAR} />
        <Button label={ButtonLabels.ZERO} />
        <Button label={ButtonLabels.DOT} />
        <Button label={ButtonLabels.ADDITION} />
      </Row>
      <Row>
      <Button label={ButtonLabels.EQUAL} />        
        <Button label={ButtonLabels.BACKSPACE} />        
      </Row>
    </Container>
  )
}

export default () => (
  <CalculatorProvider>
    <App />
  </CalculatorProvider>
)
