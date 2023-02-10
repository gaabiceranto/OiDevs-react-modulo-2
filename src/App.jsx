
import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header'
import { Grid, GridItem } from './ui/grid';
import "./index.css";
import { Highlights } from './components/highlights/Highlights';




function App() {

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
