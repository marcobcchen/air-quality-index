import React, { useEffect, useState } from 'react'
import { Paper, Grid, Typography, Box, FormControl, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { apiAQI } from '../api/api'
import AreaIndex from '../components/AreaIndex'
import StandardIndex from '../components/StandardIndex'

import { IRecords } from '../interface/AirQualityIndex'


const useStyles = makeStyles(theme => ({
  main:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '#eee',
    padding: theme.spacing(2),
  },
  board: {
    background: theme.palette.common.white,
    maxWidth: '800px',
    padding: theme.spacing(2),
  },
  standardIndex: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
    '& > div': {
      [theme.breakpoints.down('xs')]: {
        maxWidth: () => '100%',
      },
    }
  },
  formControl: {
    minWidth: 120,
  },
}))

const standardIndexData = [
  {status: '良好', range: '0~50', color: 'green'},
  {status: '普通', range: '51~100', color: 'yellow'},
  {status: '對敏感族群不健康', range: '101~150', color: 'orange'},
  {status: '對所有族群不健康', range: '151~200', color: 'red'},
  {status: '非常不健康', range: '201~300', color: 'purple'},
  {status: '危害', range: '301~500', color: 'brown'}
]

const AirQualityIndex = () => {
  const classes = useStyles()
  const [county, setCounty] = useState('')
  const [records, setRecords] = useState([])

  const handleChange = (e: React.ChangeEvent<{value: unknown}>) => {
    console.log(e.target.value)
    setCounty(e.target.value as string)
  }

  const countyFilter = () => {
    // console.log('records:', records)
    const set = new Set();
    if(records){
      const counties = records.filter((item: IRecords) => !set.has(item.County) ? set.add(item.County) : false)

      return counties.map((item: IRecords, index) => (
        <MenuItem value={item.County} key={index}>{item.County}</MenuItem>
      ))
    }
  }

  const countyDetail = () => {
    const set = new Set();
    if(records){
      const counties = records.filter((item:IRecords) => item.County === county ? set.add(item) : false)

      return counties.map((item:IRecords, index) => (
        <Grid item xs={6} key={index}>
          <AreaIndex data={item} />
        </Grid>
      ))
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await apiAQI()
      .then(res => {
        console.log(res.data.records)
        setRecords(res.data.records);
      })
      .catch(err => {
        console.log(err)
      })
    }
    fetchData()
  }, [])

  return(
    <Grid container justify='center' alignItems='flex-start' className={classes.main}>
      <Grid container item xs={12} className={classes.board} component={Paper} elevation={3} square>
        
        <Grid item xs={12} sm={6}>
          <Box mb={4}>
            <Typography variant='h5'>空氣品質指標AQI</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mb={4}>
            <FormControl className={classes.formControl}>
              <Select
                id="demo-simple-select"
                value={county}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  <em>請選擇縣市</em>
                </MenuItem>
                {countyFilter()}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid container className={classes.standardIndex}>
          {standardIndexData.map((data, index) => (
            <StandardIndex data={data} key={index}/>
          ))}
        </Grid>

        <Grid container spacing={1}>
          {county ? countyDetail() : null}
        </Grid>

      </Grid>
    </Grid>
  )
}

export default AirQualityIndex