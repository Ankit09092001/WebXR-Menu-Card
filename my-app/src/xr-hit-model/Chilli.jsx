import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ position, rotation, scale = [6, 6, 6], modelName }) => {
  const gltf = useLoader(GLTFLoader, `/models/Chilli.glb`);
  const modelRef = useRef();


  return (
    <group position={position} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default Model;