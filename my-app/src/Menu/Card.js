import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import Burger from "./Image/Burger.jpg";
import Cake from "./Image/Cake.jpg";
import Pizza from "./Image/PIZZA.jpg";
import Muffin from "./Image/Muffin.png";
import Samosa from "./Image/Samosa.jpeg";
import Chilli from "./Image/Chilli.jpg";
import ChickenRice from "./Image/ChickenRice.jpg";
import eggschezwan from "./Image/eggschezwan.jpg";
import Fried from "./Image/Fried.jpg";
import Gravy from "./Image/Gravy.jpg";
import Legpiece from "./Image/Legpiece.jpg";
import Lolipop from "./Image/Lolipop.jpg";
import Manchurian from "./Image/Manchurian.jpg";
import Noodles from "./Image/Noodles.jpg";
import SchezwanRice from "./Image/SchezwanRice.jpg";
import Soup from "./Image/Soup.jpg";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "../xr-hit-model/XrHitModel";
import { useNavigate } from "react-router-dom";
import { XRSession } from "@react-three/xr";
import { useXR } from "@react-three/xr";
export default function App() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [error, setError] = useState(false); // State to handle errors
  const navigate = useNavigate();

  const handleARButtonClick = (title) => {
    setSelectedFood(title);
    setArEnabled((prevArEnabled) => !prevArEnabled);
  };

  const [arEnabled, setArEnabled] = useState(false);

  const toggleAR = () => {
    window.location.replace("/menu");
  };

  return (
    <div>

      <MDBRow className="row-cols-1 row-cols-md-4 g-4 p-4">
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={Chilli}
              alt="Burger"
              position="top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Chicken Chilli Dry</MDBCardTitle>
              <MDBCardTitle>Price: ₹ 340</MDBCardTitle>
              <MDBBtn>
              <div style={{ display: "flex", alignItems: "center" }}>
                  {arEnabled ? (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={toggleAR}
                    >
                      Exit AR
                    </button>
                  ) : (
                    <ARButton
                      sessionInit={{
                        requiredFeatures: ["hit-test"],
                      }}
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={() => handleARButtonClick("Chilli")}
                    />
                  )}
                </div>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={Lolipop}
              alt="Pizza"
              position="top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Chicken Lolipop</MDBCardTitle>
              <MDBCardTitle>Price: ₹ 300</MDBCardTitle>
              <MDBBtn>
              <div style={{ display: "flex", alignItems: "center" }}>
                  {arEnabled ? (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={toggleAR}
                    >
                      Exit AR
                    </button>
                  ) : (
                    <ARButton
                      sessionInit={{
                        requiredFeatures: ["hit-test"],
                      }}
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={() => handleARButtonClick("Lolipop")}
                    />
                  )}
                </div>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={Legpiece}
              alt="Cake"
              position="top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Legpiece</MDBCardTitle>
              <MDBCardTitle>Price: ₹ 350</MDBCardTitle>
              <MDBBtn>
              <div style={{ display: "flex", alignItems: "center" }}>
                  {arEnabled ? (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={toggleAR}
                    >
                      Exit AR
                    </button>
                  ) : (
                    <ARButton
                      sessionInit={{
                        requiredFeatures: ["hit-test"],
                      }}
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={() => handleARButtonClick("Model")}
                    />
                  )}
                </div>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={Fried}
              alt="Muffin"
              position="top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Fried Rice</MDBCardTitle>
              <MDBCardTitle>Price: ₹ 140</MDBCardTitle>
              <MDBBtn>
              <div style={{ display: "flex", alignItems: "center" }}>
                  {arEnabled ? (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={toggleAR}
                    >
                      Exit AR
                    </button>
                  ) : (
                    <ARButton
                      sessionInit={{
                        requiredFeatures: ["hit-test"],
                      }}
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={() => handleARButtonClick("Fried")}
                    />
                  )}
                </div>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={Noodles}
              alt="Muffin"
              position="top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Noodles</MDBCardTitle>
              <MDBCardTitle>Price: ₹ 150</MDBCardTitle>
              <MDBBtn>
              <div style={{ display: "flex", alignItems: "center" }}>
                  {arEnabled ? (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={toggleAR}
                    >
                      Exit AR
                    </button>
                  ) : (
                    <ARButton
                      sessionInit={{
                        requiredFeatures: ["hit-test"],
                      }}
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={() => handleARButtonClick("Noodles")}
                    />
                  )}
                </div>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={SchezwanRice}
              alt="Muffin"
              position="top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Schezwan Fried Rice</MDBCardTitle>
              <MDBCardTitle>Price: ₹ 150</MDBCardTitle>
              <MDBBtn>
              <div style={{ display: "flex", alignItems: "center" }}>
                  {arEnabled ? (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={toggleAR}
                    >
                      Exit AR
                    </button>
                  ) : (
                    <ARButton
                      sessionInit={{
                        requiredFeatures: ["hit-test"],
                      }}
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={() => handleARButtonClick("SchezwanRice")}
                    />
                  )}
                </div>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={eggschezwan}
              alt="Muffin"
              position="top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Egg Schezwan Fried Rice</MDBCardTitle>
              <MDBCardTitle>Price: ₹ 170</MDBCardTitle>
              <MDBBtn>
               <div style={{ display: "flex", alignItems: "center" }}>
                  {arEnabled ? (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={toggleAR}
                    >
                      Exit AR
                    </button>
                  ) : (
                    <ARButton
                      sessionInit={{
                        requiredFeatures: ["hit-test"],
                      }}
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={() => handleARButtonClick("EggSchezwan")}
                    />
                  )}
                </div>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={Manchurian}
              alt="Muffin"
              position="top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Manchurian</MDBCardTitle>
              <MDBCardTitle>Price: ₹ 160</MDBCardTitle>
              <MDBBtn>
              <div style={{ display: "flex", alignItems: "center" }}>
                  {arEnabled ? (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={toggleAR}
                    >
                      Exit AR
                    </button>
                  ) : (
                    <ARButton
                      sessionInit={{
                        requiredFeatures: ["hit-test"],
                      }}
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={() => handleARButtonClick("Manchurian")}
                    />
                  )}
                </div>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={ChickenRice}
              alt="Muffin"
              position="top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Chicken Fried Rice</MDBCardTitle>
              <MDBCardTitle>Price: ₹ 210</MDBCardTitle>
              <MDBBtn>
              <div style={{ display: "flex", alignItems: "center" }}>
                  {arEnabled ? (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={toggleAR}
                    >
                      Exit AR
                    </button>
                  ) : (
                    <ARButton
                      sessionInit={{
                        requiredFeatures: ["hit-test"],
                      }}
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={() => handleARButtonClick("ChickenRice")}
                    />
                  )}
                </div>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={Soup}
              alt="Muffin"
              position="top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Soup</MDBCardTitle>
              <MDBCardTitle>Price: ₹ 140</MDBCardTitle>
              <MDBBtn>
              <div style={{ display: "flex", alignItems: "center" }}>
                  {arEnabled ? (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={toggleAR}
                    >
                      Exit AR
                    </button>
                  ) : (
                    <ARButton
                      sessionInit={{
                        requiredFeatures: ["hit-test"],
                      }}
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={() => handleARButtonClick("Soup")}
                    />
                  )}
                </div>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={Gravy}
              alt="Muffin"
              position="top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Gravy</MDBCardTitle>
              <MDBCardTitle>Price: ₹ 80</MDBCardTitle>
              <MDBBtn>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {arEnabled ? (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={toggleAR}
                    >
                      Exit AR
                    </button>
                  ) : (
                    <ARButton
                      sessionInit={{
                        requiredFeatures: ["hit-test"],
                      }}
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        marginRight: "5px",
                        color: "white",
                      }}
                      onClick={() => handleARButtonClick("Gravy")}
                    />
                  )}
                </div>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <Canvas>
        <XR>
          <XrHitModel selectedFood={selectedFood} />
        </XR>
      </Canvas>
    </div>
  );
}
