import { connect } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { compose } from "redux"
import Countries from "./components/Countries/Countries"
import { loadCountries, getData } from "./reducers/body-reducer"
import Universities from "./components/Universities/Universities"
import University from "./components/Universities/University"

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Routes>
                <Route path="/" 
                    element={<Countries loadCountries={props.loadCountries} 
                                        countries={props.countries} 
                                        isLoading={props.isLoading}/> }/>
                <Route path="/:countryName" 
                    element={<Universities isLoading={props.isLoading} getData={props.getData} data={props.data} />} />
                <Route path="*" 
                    element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

const mapStateToProps = (state) => ({
    countries: state.body.countries,
    data: state.body.data,
    isLoading: state.body.isLoading
})

export default compose(
    connect(mapStateToProps, { loadCountries, getData })
)(App)