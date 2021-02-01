import React from 'react'
import { MagicSpinner } from 'react-spinners-kit'
import { useStyles } from './Styles'

export const FullBodyLoader = ({ loading }) => {
  let classes = useStyles()
  return (
    <div className={classes.fullBodyLoaderWrapper}>
      <MagicSpinner
        size={100}
        color="#25007f"
        loading={loading}
      />
    </div>
  )
}
