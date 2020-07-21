import React, { useState } from 'react'
import { Card, CardContent, Collapse, Typography, Grid, TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../views/theme'

import { IRecords } from '../interface/AirQualityIndex'

interface IProps{
  data: IRecords
}

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 0,
    border: '1px solid #555',
  },
  site: {
    padding: '16px',
  },
  mainIndex: {
    background: 'var(--bgColor)',
    borderLeft: '1px solid #555',
    color: theme.palette.common.white
  },
  topBorder: {
    borderTop: '1px solid #555',
  },
  table: {
    width: '100%'
  }
}))

const setColor = (bgColor: string) => {
  return {
    '--bgColor': bgColor
  } as React.CSSProperties
}


const AreaIndex = (props: IProps) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  const {data} = props
  console.log('area index:', data)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const setStyle = (aqi: any) => {
    console.log(aqi)
    const aqiIndex = Number(aqi)
    if(aqiIndex < 50){
      return setColor(theme.palette.common.green)
    }
    else if(aqiIndex > 50 && aqiIndex < 101){
      return setColor(theme.palette.common.yellow)
    }
    else if(aqiIndex > 100 && aqiIndex < 151){
      return setColor(theme.palette.common.orange)
    }
    else if(aqiIndex > 150 && aqiIndex < 201){
      return setColor(theme.palette.common.red)
    }
    else if(aqiIndex > 200 && aqiIndex < 301){
      return setColor(theme.palette.common.purple)
    }
    else if(aqiIndex > 300){
      return setColor(theme.palette.common.brown)
    }
  }

  return (
    <Card variant='outlined' className={classes.card} onClick={() => handleExpandClick()}>
      <Grid container>
        <Grid item xs={6} className={classes.site}>
          <Typography variant='h5' align='center'>{data["SiteName"]}</Typography>
        </Grid>
        <Grid item xs={6} className={`${classes.site} ${classes.mainIndex}`} style={setStyle(data.AQI)}>
          <Typography variant='h5' align='center'>{data["AQI"]}</Typography>
        </Grid>
      </Grid>
     
      <Collapse in={expanded} timeout='auto'>
        <CardContent className={classes.topBorder}>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="left">PM<sub>2.5</sub></TableCell>
                  <TableCell align="left">{data["PM2.5"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">PM<sub>10</sub></TableCell>
                  <TableCell align="left">{data["PM10"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">O<sub>3</sub></TableCell>
                  <TableCell align="left">{data["O3"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">CO</TableCell>
                  <TableCell align="left">{data["CO"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">SO<sub>2</sub></TableCell>
                  <TableCell align="left">{data["SO2"]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">NO<sub>2</sub></TableCell>
                  <TableCell align="left">{data["NO2"]}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
         
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default AreaIndex