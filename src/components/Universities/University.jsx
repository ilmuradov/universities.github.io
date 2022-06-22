import classes from "./University.module.css"

const University = (props) => {
    return (
        <div className={classes.container}>
            <div> {props.id} </div>
            <a target="_blank" href={`${props.web_pages}`}> <h3> {props.name} </h3> </a>
        </div>
    )
}

export default University 