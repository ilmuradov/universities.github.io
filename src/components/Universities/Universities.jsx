import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { objectMapper } from "../../app-helpers/object-mapper"
import classes from "./Universities.module.css"
import University from "./University"
import { ArrowLeft } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
 
const Universities = (props) => {
    const { countryName } = useParams();
    useEffect(() => {props.getData(countryName)}, [])

    const navigate = useNavigate()

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.countryName}> 
                    <div onClick={() => navigate("/")} className={classes.arrow}>
                        <ArrowLeft />
                    </div>  
                    <h1> {countryName} </h1>
                </div>
                <p> Choose university... </p>
            </div>
            <div className={classes.universities}>
                {props.isLoading ? 
                    <h4> Loading... </h4>
                    :
                    objectMapper(props.data, University)}
            </div>
        </div>
    )
}

export default Universities