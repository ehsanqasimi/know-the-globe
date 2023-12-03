import React from 'react'

function Card(props) {

    let currency = props.currency && Object.values(props.currency)[0].name 
    let symbol = props.currency && Object.values(props.currency)[0].symbol

    let languages = props.languages ? Object.values(props.languages).join(', ') : 'nothing'
    let nationality = props.nationality ? props.nationality.eng.f : ''

    return (
        <div className='card'>
            <img src={props.img} alt="" />
            <div className="right">
                <p><span>Name: </span>{props.name}</p>
                <p><span>Capital: </span> {props.capital}</p>
                <p><span>Area: </span> {props.area}</p>
                <p><span>Population: </span> {props.population}</p>
                <p><span>Continent: </span> {props.continent}</p>
                <p><span>Independent: </span> {props.independent}</p>
                <p><span>Borders: </span> {props.borders}</p>
                <p><span>Driver Seat: </span> {props.driverSeat}</p>
                <p><span>Languages: </span> {languages}</p>
                <p><span>Nationality: </span> {nationality || 'nothing'}</p>
                <p><span>UN Member: </span> {props.UNmember}</p>
                <p><span>Starts Week at: </span>: {props.startWeek}</p>
                <p><span>Currencies: </span> { currency || 'nothing'}, {symbol || 'nothing'}</p>
                <p><span>Top Level Domain: </span> {props.tld}</p>
            </div>
        </div>
        
    )
}

export default Card