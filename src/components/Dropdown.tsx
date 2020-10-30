import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface SelectedType {
  label: string,
  value: string
}

interface DropdownProps {
  selected: SelectedType,
  onSelectedChange: Dispatch<SetStateAction<SelectedType>>,
  options: Array<SelectedType>,
}

export const Dropdown: React.FC<DropdownProps> = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    document.body.addEventListener('click', () => {
      setOpen(false)
    }, { capture: true })
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
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
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