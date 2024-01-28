import axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoints from '../services/service';

const Hero = () => {

    const[movie, setmovie] = useState({});

    useEffect(() => {
        axios.get(endpoints.popular).then((response) => {
            console.log(response)
        })
    })
  return (
    <div>Hero</div>
  )
}

export default Hero