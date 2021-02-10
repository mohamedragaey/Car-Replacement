import {makeStyles} from '@material-ui/core/styles'
import {fade} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  lawsWrapperGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5)
  },
  lawsWrapper: {
    height: 'calc(100% - 100px)',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3, 4),
    background: theme.palette.common.white,
    '& h2': {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0)
    },
    '& li': {
      marginBottom: theme.spacing(1)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0)
    }
  },
  fullHeight: {
    height: '100%'
  },
  tabsWrapper: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'flex-start'
    }
  },
  tabs: {
    '&.MuiTabs-root': {
      flex: '0 0 auto'
    },
    '& .MuiTabs-flexContainer': {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'row'
      }
    },
    '& .MuiTab-root': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.pxToRem(14),
      padding: theme.spacing(3.5),
      borderLeft: `1px solid transparent`,
      borderTop: `1px solid transparent`,
      borderBottom: `1px solid transparent`,
      background: fade(theme.palette.tertiary.main, 0.1),
      [theme.breakpoints.up('md')]: {
        minWidth: 276
      },
      [theme.breakpoints.down('sm')]: {
        flex: '1 1 auto',
        maxWidth: '100%'
      }
    },
    '& .MuiTabs-indicator': {
      background: theme.palette.common.white,
      borderTop: `1px solid ${theme.palette.tertiary.main}`,
      borderBottom: `1px solid ${theme.palette.tertiary.main}`,
      [theme.breakpoints.down('sm')]: {
        background: 'transparent',
        borderTop: `1px solid transparent`,
        borderBottom: `1px solid transparent`
      }
    },
    '& .MuiTab-textColorInherit.Mui-selected': {
      borderLeft: `1px solid ${theme.palette.tertiary.main}`,
      borderTop: `1px solid ${theme.palette.tertiary.main}`,
      borderBottom: `1px solid ${theme.palette.tertiary.main}`,
      background: 'transparent',
      [theme.breakpoints.down('sm')]: {
        borderLeft: `1px solid ${theme.palette.tertiary.main}`,
        borderRight: `1px solid ${theme.palette.tertiary.main}`,
        borderBottom: `1px solid ${theme.palette.common.white}`
      }
    }
  },
  tabPanel: {
    flex: '1 1 auto',
    marginLeft: -1,
    border: `1px solid ${theme.palette.tertiary.main}`,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: -1
    },
    '& h2,& h3': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.pxToRem(14)
    },
    '& ol': {
      marginBottom: theme.spacing(5)
    }
  }
}))
