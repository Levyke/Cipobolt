import { useState } from 'react'
import '../App.css'
import Layout from './Layout'

const NewMarka = () => {
    const [marka, setMarka] = useState({
        nev: "",
        szarmazasi_orszag: "",
        img: ""
    })

    const [answer, setAnswer] = useState("")

    const handleChange = (e) => {
        setMarka({
            ...marka,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        fetch("http://127.0.0.1:8000/api/marka", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(marka)
        })
            .then(() => {
                setMarka({
                    nev: "",
                    szarmazasi_orszag: "",
                    img: ""
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
                            value={marka.nev}
                            onChange={handleChange}
                            name='nev'
                            required
                        />
                    </div>
                    <div>
                        <label>Származási ország</label>
                        <input
                            type="integer"
                            value={marka.szarmazasi_orszag}
                            onChange={handleChange}
                            name='szarmazasi_orszag'
                            required
                        />
                    </div>
                    <div>
                        <label>Kép</label>
                        <input
                            type="integer"
                            value={marka.img}
                            onChange={handleChange}
                            name='img'
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
export default NewMarka