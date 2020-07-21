import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../views/theme'

interface IProps{
  data: {
    status: string
    range: string
    color: string
  }
}

const useStyles = makeStyles(theme => ({
  selfIndex: {
    background: 'var(--bgColor)',
    [theme.breakpoints.up('sm')]: {
      borderTop: `4px solid var(--borderColor)`,
    },
    [theme.breakpoints.down('xs')]: {
      borderLeft: `4px solid var(--borderColor)`,
    },
  }
}))

const setColor = (bgColor: string, borderColor: string) => {
  return {
    '--bgColor': bgColor,
    '--borderColor': borderColor
  } as React.CSSProperties
}

const StandardIndex = (props: IProps) => {
  const classes = useStyles()

  const setStyle = (color: string) => {
    switch(color){
      case 'green':
        return setColor(theme.palette.common.lightGreen, theme.palette.common.green)
      case 'yellow':
        return setColor(theme.palette.common.lightYellow, theme.palette.common.yellow)
      case 'orange':
        return setColor(theme.palette.common.lightOrange, theme.palette.common.orange)
      case 'red':
        return setColor(theme.palette.common.lightRed, theme.palette.common.red)
      case 'purple':
        return setColor(theme.palette.common.lightPurple, theme.palette.common.purple)
      case 'brown':
        return setColor(theme.palette.common.lightBrown, theme.palette.common.brown)
    }
  }

  return(
    <Grid container item xs={2} className={classes.selfIndex} style={setStyle(props.data.color)}>
      <Box alignSelf='center' p={1}>
        <Typography variant='body2'>
          {props.data.status}
          <br/>
          {props.data.range}
        </Typography>
      </Box>
    </Grid>
  )
}

export default StandardIndex