import { useState } from 'react'
import '../App.css'
import Layout from './Layout'
import { useLocation, useNavigate } from 'react-router-dom'

const EditCipo = () => {
    const location = useLocation()
    const props = location.state
    const navigate = useNavigate()

    const [cipo, setCipo] = useState({
        ar: props.ar
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

        fetch(`http://127.0.0.1:8000/api/cipo/${props.cipo_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cipo)
        })
            .then(() => {
                props.ar = cipo.ar
                navigate(`/${props.cipo_id}`, {state: props})
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
                        <label>Ár</label>
                        <input 
                            type="integer"
                            value={cipo.ar} 
                            onChange={handleChange}
                            name='ar'
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
export default EditCipo