import React, { useState, useEffect } from 'react';



function ListHotelPage() {

    // console.log (process.env.DATABASE_URL)
    const [hotels, setHotels] = useState([]); 
    const url = 'https://booking-com.p.rapidapi.com/v1/hotels/search?room_number=1&checkin_date=2023-05-27&checkout_date=2023-05-28&units=metric&order_by=popularity&adults_number=2&filter_by_currency=AED&locale=en-gb&dest_id=-553173&dest_type=city&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_ages=5%2C0&children_number=2&page_number=0&include_adjacency=true';
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': `process.env.REACT_APP_RAPID_API_KEY`,
        'X-RapidAPI-Host': `process.env.REACT_APP_RAPID_API_HOST`
        }
    };

    const getHotelData = () => {
        fetch(url, options)
        .then(res => res.json())
        .then(json => setHotels(json.result))
        .catch(err => console.error('error:' + err));
    }

    useEffect(() => {
        getHotelData()
    }, [])

  return (   
   <>   
   {/* hotel_id, hotel_name_trans,  */}
        <h1>LIST HOTELS</h1>      
        {
            hotels.map((hotel) => {
                return (
                    <p key={hotel.hotel_id}>{hotel.hotel_name_trans}</p>
                );
            })            
        }
        
   </>
  )
}

export default ListHotelPage