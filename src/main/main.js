import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Typography, Link, Container , Toolbar, CssBaseline} from '@material-ui/core';
import { Button, Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import { useSpring, animated } from 'react-spring'
import {getProducts} from '../Api'


export default function Main() {

  const [productos, setProductos] = useState([])
  const classes = useStyles();
  const loadProducts = async () =>{
    const data = await getProducts()
    setProductos(data)
  }
  const styles = useSpring({
    loop: true,
    config:{duration: 1000},
    to: [
      { opacity: 1, color: '#ffa500' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: '#ffa500' },
  })

  useEffect(() => {
    loadProducts();
  },[])
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={2} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        <animated.div style={styles} className={classes.toolbarTitle} align={'center'}>FRUTAS Y VERDURAS "CASTOR"</animated.div>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" component="main" className={classes.mainContainer}>
        <Grid container spacing={5} alignItems="flex-end">
          {productos.map((productos) => (
            <Grid item key={productos.nombre} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={productos.nombre}
                  subheader={productos.marca}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${productos.precio}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /kg
                    </Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <Button fullWidth color="primary">
                   
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor:'#fffacd'
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    [theme.breakpoints.down('lg')]: {
        fontSize:25,
        fontWeight:'bold',
        flexGrow: 1,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize:15,
        fontWeight:'bold',
      },
  },
  link: {
    [theme.breakpoints.down('lg')]: {
        margin: theme.spacing(1, 4),
        fontWeight:'bold'
      },
      [theme.breakpoints.down('sm')]: {
      },

  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:'#ffa500'
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  mainContainer:{
    marginTop:'2%',
  },
  button:{
      borderRadius:20
  }
}));
