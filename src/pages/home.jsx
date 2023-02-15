
import { Navbar } from '../components/navbar/Navbar'
import { Header } from '../components/header'
import { Grid, GridItem } from '../ui/grid';
import "../index.css";
import { Highlights } from '../components/highlights/Highlights';
import { fetcher } from '../services';
import React from 'react';
import { Feed } from '../components/feed';




export function Home(props) {
  const [photos, setPhotos] = React.useState([])

 
  return(
    <>
    <Grid >
      <GridItem>
        <Navbar onClickLoginButton = {props.onClickLoginButton}/>
      </GridItem>
      <GridItem>
        {/* <input placeholder='TESTE INPUT' onChange={onChangeHandler} /> */}
        <Header/>
        <Highlights/>
        {/* <button onClick={() => searchImages() }> Buscar Imagens</button> */}
        <Feed/>
      </GridItem>
    </Grid>
    </>
  );
}


