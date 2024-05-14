import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import first from './Image/4.jpg';
import second from './Image/9.jpg';
import third from './Image/2.png';

export default function App() {
  return (
    <>
      <style>
        {`
          .carousel-image {
            width: 100%;
          }

          @media (min-width: 768px) {
            .carousel-image {
              max-width: 100%;
              max-height: 630px; /* Adjust as needed */
              margin: 0 auto; /* Center the image */
            }
          }
        `}
      </style>
      <MDBCarousel showIndicators showControls fade interval={1000}>
        <MDBCarouselItem itemId={1}>
          <img src={first} className='d-block img-fluid carousel-image' alt='...' />
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img src={second} className='d-block img-fluid carousel-image' alt='...' />
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img src={third} className='d-block img-fluid carousel-image' alt='...' />
        </MDBCarouselItem>
      </MDBCarousel>
    </>
  );
}
