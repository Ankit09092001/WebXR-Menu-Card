import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import first from './Image/1.jpg';
import second from './Image/2.jpg';
import third from './Image/3.jpg';
const styles = `
  .carousel {
    width: 100%;
    max-width: 100%;
    height: 85vh; /* Adjust the height to 70% of the viewport height */
  }

  .carousel-item img {
    width: 100%;
    height: 85vh;
  }

  .carousel-caption {
    bottom: 20px;
  }
`;

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img src={first} className='d-block w-100' alt='...' />
          
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img src={second} className='d-block w-100' alt='...' />
         
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img src={third} className='d-block w-100' alt='...' />
         
        </MDBCarouselItem>
      </MDBCarousel>
    </>
  );
}
