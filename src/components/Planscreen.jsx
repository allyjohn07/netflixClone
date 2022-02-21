import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import db from '../app/firebase';
import './planscreen.css'

function Planscreen() {
    const [products, seuProducts] = useState([]);

    useEffect( () => {
        db.collection('users')
    },[])
  return (
    <div className='planscreen'>
        Planscreen
    </div>
  )
}

export default Planscreen