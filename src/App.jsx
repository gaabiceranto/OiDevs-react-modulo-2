
import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header'
import { Grid, GridItem } from './ui/grid';
import "./index.css";
import { Highlights } from './components/highlights/Highlights';
import { useEffect } from 'react';
import { fetcher } from './components/services';
import React from 'react';


function funcaoMemoizada(){
  return "teste" 
}

function App() {
  const [photos, setPhotos] = React.useState([])
  const [text, setText] = React.useState();

  // useEffect (() => {
  //   const makeRequest = async () => {
  //     const response = await fetcher ("photos");
  //     setPhotos (response)
  //   };
  //   makeRequest();
    
  // },[]) 



  // **** Use memo exemplo  (quando vc precisa executar uma ação quando algo do componete alterar))

  const allPhotosMemoized = React.useMemo(()=>{
    // console.log('calling memoized function')
    return photos.map(item => item.urls.small)
  }, [photos])

  const allSmallPhotosNOTMemoized = () => {
    // console.log('calling NOT memoized function')
    return photos.map(item => item.urls.small)
  }
  
  allSmallPhotosNOTMemoized();

// **** Use memo exemplo  (quando vc precisa executar uma função complexa (side Effect))
  const onChangeHandler = React.useCallback((e) =>{
    console.log ('chamando set text')
    console.log(photos)
    setText(e.currentTarget.value)
  }, [photos])

  const onChangeHandlerNOTCallback = (e) =>{
    console.log ('chamando set text')
    setText(e.currentTarget.value)
  }

  const searchImages = React.useCallback(async () => {
    const response = await fetcher ("photos");
    setPhotos (response)
  },[])
    

  

 
  return(
    <>
    <Grid >
      <GridItem>
        <Navbar/>
      </GridItem>
      <GridItem>
        <input placeholder='TESTE INPUT' onChange={onChangeHandler} />
        <Header/>
        <Highlights/>
        <button onClick={() => searchImages() }> Buscar Imagens</button>
        {photos.map (photo => 
        <img key= {photo.id} src={photo.urls.small}/>)}
      </GridItem>
    </Grid>
    </>
  );
}

export default App
