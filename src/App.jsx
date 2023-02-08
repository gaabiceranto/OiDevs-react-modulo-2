
import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/Header'
import { Grid, GridItem } from './ui/grid';
import "./index.css";




function App() {

  return(
    <>
    <Grid >
      <GridItem>
        <Navbar/>
      </GridItem>
      <GridItem>
        <Header/>
      </GridItem>
    </Grid>
    </>
  );
}

export default App
