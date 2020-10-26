import React, { useState } from 'react'

interface AccordionProps {
  items: Array<{
    title: string,
    content: string
  }>
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const onTitleClick = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null)
    }
    else {
      setActiveIndex(index)
    }
  }

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div 
          className="title active"
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${activeIndex === index ? "active" : "deactive"}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  )
}