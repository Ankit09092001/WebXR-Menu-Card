import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ position, scale = [10, 10, 10], modelName }) => {
  const gltf = useLoader(GLTFLoader, `/models/Legpiece.glb`);
  const modelRef = useRef();

  return (
    <group ref={modelRef} position={position} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default Model;
