import React from 'react'
import { SwapSpinner } from 'react-spinners-kit'
import { useStyles } from './Styles'

export const FormLoader = ({ props, loading }) => {
  let classes = useStyles()
  return (
    <div className={classes.formLoaderWrapper}>
      <SwapSpinner
        size={50}
        color='#f44336'
        loading={loading}
      />
    </div>
  )
}
