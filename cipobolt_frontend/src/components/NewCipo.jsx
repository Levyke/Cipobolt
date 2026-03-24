import { useState } from 'react'
import '../App.css'
import Layout from './Layout'

const NewCipo = () => {
    const [cipo, setCipo] = useState({
        nev: "",
        meret: "",
        ar: "",
        marka_id: ""
    })

    const [answer, setAnswer] = useState("")

    const handleChange = (e) => {
        setCipo({
            ...cipo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        fetch("http://127.0.0.1:8000/api/cipo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cipo)
        })
            .then(() => {
                setCipo({
                    nev: "",
                    meret: "",
                    ar: "",
                    marka_id: ""
                })
                setAnswer("Sikeres mentés")
            })
            .catch(errors => {
                console.error(errors)
                setAnswer("Hiba a mentés során")
            })
    }

    return (
        <>
            <Layout>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Név</label>
                        <input 
                            type="text"
                            value={cipo.nev} 
                            onChange={handleChange}
                            name='nev'
                            required
                        />
                    </div>
                    <div>
                        <label>Méret</label>
                        <input 
                            type="integer"
                            value={cipo.meret} 
                            onChange={handleChange}
                            name='meret'
                            required
                        />
                    </div>
                    <div>
                        <label>Ár</label>
                        <input 
                            type="integer"
                            value={cipo.ar} 
                            onChange={handleChange}
                            name='ar'
                            required
                        />
                    </div>
                    <div>
                        <label>Márka azonosító</label>
                        <input 
                            type="text"
                            value={cipo.marka_id} 
                            onChange={handleChange}
                            name='marka_id'
                            required
                        />
                    </div>
                    <button type='submit'>Mentés</button>
                </form>
                {answer && <div>{answer}</div>}
            </Layout>
        </>
    )
}
export default NewCipo