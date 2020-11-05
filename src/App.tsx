import React, { useState } from 'react'
import { Accordion } from './components/Accordion'
import { Dropdown } from './components/Dropdown'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Translate } from './components/Translate'
import { Route } from './components/Route'

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
  
  /*const navigate = () => {
    switch (window.location.pathname) {
      case '/':
        return <Accordion items={items} />
      case '/list':
        return <Search />
      case '/dropdown':
        return <Dropdown options={options}  />
      case '/translate':
        return <Translate />
    }
  }*/

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown options={options} label="Select a Color" selected={selected} onSelectedChange={setSelected} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}