import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

const AboutPage = () => {
  return (
    <div>
   
      
      <MDBRow className="px-4">
        <MDBCol md="6">
          <MDBCard light style={{ backgroundColor: '#FFFFE8' }}>
            <MDBCardBody>
              <MDBCardTitle>Address</MDBCardTitle>
              <MDBCardText>
              12/13/14 Raj Yog Building, <br />
              Nagindas Rd, Nalasopara E, Vasai-Virar <br />
              Maharashtra 401209
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6">
          <MDBCard light style={{ backgroundColor: '#FFFFE8' }}>
            <MDBCardBody>
              <MDBCardTitle>Contact</MDBCardTitle>
              <MDBCardText>
                Email: chillihouse@gmail.com <br />
                Phone: 63871 34579
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="px-4 mt-4">
        <MDBCol>
          <MDBCard light style={{ backgroundColor: '#FFFFE8' }}>
            <MDBCardBody>
              <MDBCardTitle>Our Story</MDBCardTitle>
              <MDBCardText>
                After COVID-19, we embarked on a journey to bring the flavors of authentic Chinese cuisine to Nalasopara. With passion and dedication, we transformed our vision into reality, establishing the most beloved Chinese restaurant in the area. Within just two years, we garnered over 1000+ 5-star reviews, curated a menu with over 100+ food items, maintained impeccable hygiene standards, and assembled a team of expert chefs. Our commitment to excellence continues to drive us forward as we serve our community with delightful culinary experiences.
              </MDBCardText>
              <br /> 
              <MDBCardTitle>Our Vision</MDBCardTitle>
              <MDBCardText>
              Looking ahead, our vision extends beyond a single location. We aspire to expand our reach by opening a franchise chain of Chinese restaurants, spreading the joy of our cuisine to new communities while upholding the same standards of quality and service that have made us a success in Nalasopara.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default AboutPage;
