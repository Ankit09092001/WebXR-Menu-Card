import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
// import './Card.css'; // Import your CSS file

export default function App() {
  const [animatedText, setAnimatedText] = useState('');
  const [textToAnimate] = useState("Explore Delicious Choices: WebXR Menu Card Made Simple.");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < textToAnimate.length) {
        setAnimatedText(textToAnimate.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50); // Adjust the timing here to control the speed of animation
  }, []);

  return (
    <>
      <MDBCard alignment='center'>
        <MDBCardBody>
          <MDBCardTitle>Welcome to Hotel CHilli House - WebXR Menu Card</MDBCardTitle>
          <MDBCardText>
            <span className="animated-text">{animatedText}</span>
          </MDBCardText>
          <MDBBtn href='#'>Go to About</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

