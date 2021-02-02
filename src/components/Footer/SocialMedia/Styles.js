import {darken, makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  socialMediaWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2)
  },
  socialMediaLink: {
    textDecoration: 'none',
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(12),
    padding: theme.spacing(0.5),
    display: 'inline-block',
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: 'red',
    borderRadius: '50%',
    marginRight: theme.spacing(1),
    '& .MuiSvgIcon-root': {
      fontSize: theme.typography.pxToRem(16)
    },
    '&.linkedIn': {
      backgroundColor: '#007bb6'
    },
    '&.twitter': {
      backgroundColor: '#00aced'
    },
    '&.youTube': {
      backgroundColor: '#bb0000'
    },
    '&.facebook': {
      backgroundColor: '#3b5998'
    },
    '&:hover,&:focus': {
      color: theme.palette.common.white,
      '&.linkedIn': {
        backgroundColor: darken('#007bb6', 0.25)
      },
      '&.twitter': {
        backgroundColor: darken('#00aced', 0.25)
      },
      '&.youTube': {
        backgroundColor: darken('#bb0000', 0.25)
      },
      '&.facebook': {
        backgroundColor: darken('#3b5998', 0.25)
      }
    }
  }
}))
