import classes from "./CountryElements.module.css"
import { useNavigate } from "react-router-dom"

const CountryElements = (props) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`${props.name}`)} className={classes.container}>
            <h3> {props.name}  </h3>
        </div>
    )
}

export default CountryElements