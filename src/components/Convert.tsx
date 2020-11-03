import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SelectedType } from './Dropdown' 

interface ConvertProps {
  language: SelectedType
  text: string
}

export const Convert: React.FC<ConvertProps> = ({ language, text }) => {
  const [translated, setTranslated] = useState<string>('')

  useEffect(() => {
    if (text) {
      const translation = async () => {
        const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
          params: {
            q: text,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
          }
        })
        setTranslated(data.data.translations[0].translatedText)
      }
      translation()
    }
  }, [language, text])

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
}