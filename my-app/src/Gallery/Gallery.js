import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import first from './Image/1.jpg';
import second from './Image/2.jpg';
import third from './Image/3.jpg';
import four from './Image/4.jpg';
import five from './Image/5.jpg';
import six from './Image/6.jpg';
import seven from './Image/7.jpg';
import eight from './Image/8.jpg';



export default function App() {
  return (
    <MDBRow className='px-3'>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src={first}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src={third}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
         <img
          src={five}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={four}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

       
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={eight}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src={seven}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
         <img
          src={six}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>
    </MDBRow>
  );
}