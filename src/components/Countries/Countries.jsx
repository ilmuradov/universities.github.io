import CountryElements from "./CountryElements"
import classes from "./Countries.module.css"
import { objectMapper } from "../../app-helpers/object-mapper"
import { useEffect } from "react"

const Countries = (props) => {
    useEffect(() => props.loadCountries, [])
    
    return ( 
        <div className={classes.container}>
            <div className={classes.header}>
                <h1> Countries </h1>
                <p> Choose country... </p>
            </div>
            <div className={classes.scrollContainer}>
                {props.isLoading ? 
                    <h4> Loading... </h4>
                    :
                    objectMapper(props.countries, CountryElements)
                }
            </div>
        </div>
    )
}

export default Countries