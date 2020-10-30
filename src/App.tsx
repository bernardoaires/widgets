import React, { useState } from 'react'
import { Accordion } from './components/Accordion'
import { Dropdown } from './components/Dropdown'
import { Search } from './components/Search'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React',
    content: 'React is a favorite javascript lib'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]

export const App: React.FC = () => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div>
      <Dropdown options={options} selected={selected} onSelectedChange={setSelected}/>
    </div>
  )
}