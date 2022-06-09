import { useState } from 'react'

const Display = props => <h1>{props.value}</h1>

const Stats = ({text, value}) => <p>{text} {value}</p>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Display value='give feedback' />
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <Display value='statistics' />
      <Stats text='good' value={good} />
      <Stats text='neutral' value={neutral} />
      <Stats text='bad' value={bad} />
      <Stats text='all' value={good+neutral+bad} />
      <Stats text='average' value={(good-bad)/(good+neutral+bad)} />
      <Stats text='positive' value={(good)/(good+neutral+bad) +' %'} />
    </div>
  )
}

export default App