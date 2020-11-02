import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

export interface SelectedType {
  label: string
  value: string
}

interface DropdownProps {
  label: string
  selected: SelectedType
  onSelectedChange: Dispatch<SetStateAction<SelectedType>>
  options: Array<SelectedType>
}

export const Dropdown: React.FC<DropdownProps> = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState<boolean>(false)
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const onBodyClick = (event: any) => {
      if (ref.current && ref.current.contains(event.target)){
        return
      }
      setOpen(false)
    }

    document.body.addEventListener('click', onBodyClick, { capture: true })

    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }
  }, [])

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null
    }

    return (
      <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    )
  })

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={() => setOpen(!open)}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}