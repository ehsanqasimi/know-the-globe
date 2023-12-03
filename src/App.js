import './styles/style.css'
import Card from './components/Card';
import Logo from './assets/logo192.svg'

import { useEffect, useState } from 'react';

function App() {

  const countryAPI = 'https://restcountries.com/v3.1/all'
  const [currentCountry, setCurrentCountry] = useState('all');
  const [countries, setCountries] = useState([]);

  console.log(currentCountry)

  useEffect(() => {
    fetch(countryAPI)
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);

  const handleCountryChange = (event) => {
    setCurrentCountry(event.target.value);
  }

  // Filter countries based on the selected country
  const filteredCountries = currentCountry === 'all' ? countries : countries.filter(country => country.name.common === currentCountry);

  return (
    <div className="App">
      <nav>
        <ul>
          <img src={Logo} alt="" />
          <input onChange={handleCountryChange} placeholder='Search a country' name='section' list='countries' />
          <datalist name="countries" id="countries" >
            <option className='country' value="all">All</option>
            {countries.map((country, index) => {
              return <option className='country' key={index}>{country.name.common}</option>
            })}
          </datalist>
        </ul>
      </nav>
      
      <div className="countriesContainer">
        {filteredCountries.map((country, index) => {
          return <Card
            key={index}
            img={country.flags.png}
            alt={country.flags.alt}
            name={country.name.common}
            capital={country.capital}
            area={country.area}
            population={country.population}
            continent={country.region}
            independent={country.independent ? 'Yes' : 'No'}
            borders={country.borders ? country.borders.join(', ') : 'No borders'}
            tld={country.tld ? country.tld.join(', ') : "no top-level domain"}
            startWeek={country.startOfWeek.charAt(0).toUpperCase() + country.startOfWeek.slice(1)}
            currency={country.currencies}
            languages={country.languages}
            UNmember={country.unMember ? 'Yes' : "No"}
            driverSeat={country.car.side.charAt(0).toUpperCase() + country.car.side.slice(1)}
            nationality={country.demonyms}
          />
        })}
      </div>

      <footer>Made with ❤ by <a href="#">Ehsan Qasimi</a> </footer>
    </div>
  );
}

export default App;
