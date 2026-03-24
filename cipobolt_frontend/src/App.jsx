import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Card from './components/Card'

function App() {
  const [cipo, setCipo] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/cipok')
    .then((resp) => resp.json())
    .then((data) => setCipo(data))
    .catch((errors) => console.error(errors))
  }, [])

  return (
    <Layout>
      {cipo.map((row) => {
        return (
          <Card
            key = {row.cipo_id}
            cipo_id = {row.cipo_id}
            img = {row.img}
            markaNev = {row.markaNev}
            nev = {row.nev}
            ar = {row.ar}
            meret = {row.meret}
            szarmazasi_orszag = {row.szarmazasi_orszag}
          ></Card>
        )
      })} 
    </Layout>
  )
}

export default App
