import React, {useState} from 'react';
import './App.css';
import Topo from './componentes/Topo';
import Banner from './componentes/Banner';
import Main from './componentes/Main';
import Footer from './componentes/Footer';

function App() {

  const[tema, setTema] = useState('light');
  const[tema2, setTema2] = useState('lightSection');

  function trocaTema(){
    if(tema === 'light'){
      setTema('dark')
    }else{
      setTema('light')
    }

    if(tema2 === 'lightSection'){
      setTema2('darkSection')
    }else{
      setTema2('lightSection')
    }
  }

  return (
    <>
      <Topo trocaTema={trocaTema} tema={tema}/>
      <Banner trocaTema={trocaTema} tema={tema}/>
      <Main trocaTema={trocaTema} tema2={tema2}/>
      <Footer trocaTema={trocaTema} tema={tema}/>
    </>
  );
}

export default App;
