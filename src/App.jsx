
import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header'
import { Grid, GridItem } from './ui/grid';
import "./index.css";
import { Highlights } from './components/highlights/Highlights';
import { useEffect } from 'react';
import { fetcher } from './components/services';



function App() {
  useEffect (() => {
    const makeRequest = async () => {
      const response = await fetcher ("photos");
      console.log (response)
    };
    makeRequest();
    
  },[])

  return(
    <>
    <Grid >
      <GridItem>
        <Navbar/>
      </GridItem>
      <GridItem>
        <Header/>
        <Highlights/>
      </GridItem>
    </Grid>
    </>
  );
}

export default App
