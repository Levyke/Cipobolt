import '../App.css'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${props.cipo_id}`, {state: props})
    }

    return (
        <article>
            <div>
                <img src={props.img} alt={props.markaNev} />
                <h3>{props.markaNev}</h3>
                <h3></h3>
                <h4>{props.nev}</h4>
                <h4></h4>
                <h5>{props.ar} Ft</h5>
                <div>
                    <button onClick={handleClick}>Részletek</button>
                </div>
            </div>
        </article>
    )
}

export default Card