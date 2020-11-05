import React from 'react'

interface LinkProps {
  className: string
  href: string
}

export const Link: React.FC<LinkProps> = ({ className, href, children }) => {
  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (event.metaKey || event.ctrlKey) {
      return
    }

    event.preventDefault()
    window.history.pushState({}, '', href)

    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  )
}