import React, { useEffect, useState } from 'react'
import DefaultImg from '../../assets/images/storesdefault.png'
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

import Nyc from '../../assets/images/countryImages/NYC.webp';
import SanFrancisco from '../../assets/images/countryImages/sanFransisko.webp';
import Chicago from '../../assets/images/countryImages/Chicago_1121NState_Homepage_Desktop.webp';
import London from '../../assets/images/countryImages/london.webp';
import Toronto from '../../assets/images/countryImages/Toronto_Yorkdale_9765_Web_4x3.webp';

const countries = [
    {
      id: 1,
      name: 'NYC: NoHo',
      img: Nyc,
      address: '10 Bond St., New York, NY 10012',
      weekly: 'Mon-Fri',
      weekend: 'Sun',
      hoursForWeekly: '11am–7pm',
      hoursForWeekend: '12pm–6pm',
    },
    {
      id: 2,
      name: 'San Francisco: Hayes Valley',
      img: SanFrancisco,
      address: '369 Hayes St., San Francisco, CA 94102',
      weekly: 'Mon-Sat',
      weekend: 'Sun',
      hoursForWeekly: '11am–6pm',
      hoursForWeekend: '12pm–6pm',
    },
    {
      id: 3,
      name: 'Chicago: Gold Coast',
      img: Chicago,
      address: '1121 N State St., Chicago, IL 60610',
      weekly: 'Mon-Sat',
      weekend: 'Sun',
      hoursForWeekly: '11am–7pm',
      hoursForWeekend: '12pm–6pm',
    },
    {
      id: 4,
      name: 'London: Seven Dials',
      img: London,
      address: '9 Earlham St., London WC2H 9LL',
      weekly: 'Mon-Sat',
      weekend: 'Sun',
      hoursForWeekly: '11am–6pm',
      hoursForWeekend: '12pm–5pm',
    },
    {
      id: 5,
      name: 'Toronto: Yorkdale',
      img: Toronto,
      address:
        'Yorkdale Shopping Centre 3401 Dufferin St. Unit 533, Toronto, ON M6A 2T9',
      weekly: 'Mon-Sat',
      weekend: 'Sun',
      hoursForWeekly: '10am–9pm',
      hoursForWeekend: '11pm–7pm',
    },
  ];
  
  const defaultCountry = 'NYC: NoHo'; 

const Stores = () => {
    const [selectedCountry, setSelectedCountry] = useState(defaultCountry)
    
    const handleChange = (event) => {
        setSelectedCountry(event.target.value)
    }

    useEffect (() => {
        setSelectedCountry(defaultCountry);
    }, []);


  return (
    <section className="stores">
        <div className="divider">
        Online shopping not your thing? See the products in real life. Online shopping not your thing? See the products in real life. Online shopping not your thing?
        </div>
        <div className="container">
            <div className="row">
                <div className="left">
                    <select name="stores" className='selections' value={selectedCountry} onChange={handleChange}>
                        {countries.map((c) => (
                        <option value={c.name}>{c.name}</option>
                        ))}
                    </select>
                    {selectedCountry && (
                        <div className="info">
                    <h1 className='serif-font'>{selectedCountry}</h1>
                    <p className="address">{countries.find((c) => c.name === selectedCountry).address}</p>
                        <div className="hours">
                            <p className='week'>
                            {countries.find((c) => c.name === selectedCountry).hoursForWeekly}
                            </p>
                            <p className='weekend'>
                            {countries.find((c) => c.name === selectedCountry).hoursForWeekend}
                            </p>
                        </div>
                        <div className="shopLink"><Link className='link'>See all stores<FaArrowRight className='icon' /></Link></div>
                    </div>
                    )
                    }
                        
                </div>
                <div className="image">
                {selectedCountry && (
              <img
                src={countries.find((c) => c.name === selectedCountry).img}
                alt={selectedCountry}
              />
            )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stores