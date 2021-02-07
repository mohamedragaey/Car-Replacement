import React from 'react'

export const DisplayFormikState = (props) => {
  return (
    <div style={{
      position: 'sticky',
      top: 75.67,
      zIndex: 10
    }}>
      <pre
        style={{
          background: '#f6f8fa',
          padding: '.5rem',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          margin: 0
        }}
      >
      <strong>props</strong> ={' '}
        {JSON.stringify(props, null, 2)}
    </pre>
    </div>
  )
}

/**
 * Log function works only in development and removed in production
 * @param args
 */
export const log = (...args) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(...args)
  }
}

/** Method to Filter the Empty params before send the API Request.
 *
 * @param data
 * @returns {{}}
 */
export const filterData = (data) => {
  let newData = {}
  Object.keys(data).forEach((key => {
    const isString = typeof data[key] === 'string' && data[key].length
    const isArray = Array.isArray(data[key]) && data[key].length
    const isNumber = Number.isInteger(data[key])
    const isBoolean = typeof data[key] === 'boolean' && data[key] === !!data[key]
    if (isString || isArray || isNumber || isBoolean) {
      newData[key] = data[key]
    }
  }))
  return newData
}

export const filterTags = (tags) => {
  let newTags = []
  tags.forEach((value, index) => {
    if (!!value.tag) {
      newTags.push(value)
    }
  })
  return newTags
}
export const filterCategories = (categories) => {
  let newCategories = []
  categories.forEach((value, index) => {
    if (!!value.id) {
      newCategories.push(value)
    }
  })
  return newCategories
}

export const randomKey = Math.random().toString(36).substr(2, 9)

export const isEmpty = (object) => {
  return !Object.getOwnPropertySymbols(object).length && !Object.getOwnPropertyNames(object).length
}


export const parseLocaleNumber = (num) => {
  // Detect the user's locale decimal separator:
  let decimalSeparator = (1.1).toLocaleString().substring(1, 2)
  // Detect the user's locale thousand separator:
  let thousandSeparator = (1000).toLocaleString().substring(1, 2)
  // In case there are locales that don't use a thousand separator
  if (thousandSeparator.match(/\d/))
    thousandSeparator = ''

  num = num.replace(thousandSeparator, '').replace(decimalSeparator, '.')

  return parseFloat(num)
}