import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favourites from './components/Favourites'


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

// Sul Terminale:
  // npm i bootstrap@4.6.1
  // npm i react-bootstrap@1.6.5
  // npm i react-router-dom
  // npm i @reduxjs/toolkit
  // npm i react - redux


  
// TRACCIA: Jobs Search Engine
//   Hai il compito di migliorare un progetto esistente, un motore di ricerca per offerte di lavoro in remoto.

// Oggi il tuo compito è completare il progetto inserendo indicatori di caricamento, gestione degli errori e redux - persist.


  // TASKS: (continua da dove sei arrivato precedentemente)
  //       Inserisci nuove azioni e casi nei tuoi reducers per gestire un indicatore di caricamento per operazioni asincrone ed eventuali errori, esattamente come abbiamo fatto in classe.Sfrutta queste proprietà dello store e inserisci nei componenti affetti da caricamenti e / o errori uno Spinner e un Alert per informare l’utente di questi cambi di stato.
  //       Installa il package redux - persist(npm i redux - persist) e aggiungilo al tuo progetto con la configurazione appropriata.Lo scopo è rendere il tuo applicativo capace di non perdere le informazioni dello Store dopo un refresh del browser.
  //       Mantieni intatto il resto delle funzionalità.[EXTRA]
  //       Installa redux - persist - transform - encrypt, critta la tua copia dello Store nel localStorage e salva la secretKey all’interno di un file.env.
