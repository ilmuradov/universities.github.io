import axios from "axios"

const Body = (props) => {
    const data = props.data.map(data => <div> Country {data.country}, Name: {data.name}, Web Page: {data.web_pages} </div>)

    return (
        <div>
            {data}
        </div>
    )
}

export default Body