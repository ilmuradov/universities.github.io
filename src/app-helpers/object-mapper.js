export const objectMapper = (object, Component) => {
    if(object.length === 0) {
        return <h4> No Universities... </h4>
    }
    return object.map(m => <Component {...m} />)
}