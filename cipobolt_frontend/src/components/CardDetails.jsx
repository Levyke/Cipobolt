import { useLocation, useNavigate } from 'react-router-dom'
import '../App.css'
import Layout from './Layout'

const CardDetails = () => {
    const location = useLocation()
    const props = location.state
    const navigate = useNavigate()

    const handleDelete = () => {
        const ConfirmDelete = window.confirm("Biztosan törlöd?")
        if (!ConfirmDelete) return
        fetch(`http://127.0.0.1:8000/api/cipo/${props.cipo_id}`, {
            method: "DELETE"
        })
        .then(navigate('/'))
        .catch((errors) => console.error(errors))
    }

    const handleEdit = () => {
        navigate(`/edit/${props.cipo_id}`, {state: props})
    }

    return (
        <Layout>
            <article>
                <div>
                    <img src={props.img} alt={props.markaNev} />
                    <h3>{props.markaNev}</h3>
                    <h3></h3>
                    <h4>{props.nev}</h4>
                    <h4></h4>
                    <h5>{props.ar} Ft</h5>
                    <h5><strong>Méret: </strong>{props.meret}</h5>
                    <h5><strong>Származási ország: </strong>{props.szarmazasi_orszag}</h5>
                    <div>
                        <button onClick={handleEdit}>Módosítás</button><br /><br /><button onClick={handleDelete}>Törlés</button>
                    </div>
                </div>
            </article>
        </Layout>
    )
}

export default CardDetails