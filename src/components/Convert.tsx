import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SelectedType } from './Dropdown' 

interface ConvertProps {
  language: SelectedType
  text: string
}

export const Convert: React.FC<ConvertProps> = ({ language, text }) => {
  const [translated, setTranslated] = useState<string>('')
  const [debouncedText, setDebouncedText] = useState<string>(text)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text)
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [text])

  useEffect(() => {
    if (debouncedText) {
      const translation = async () => {
        const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
          }
        })
        setTranslated(data.data.translations[0].translatedText)
      }
      translation()
    }
  }, [language, debouncedText])

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
}