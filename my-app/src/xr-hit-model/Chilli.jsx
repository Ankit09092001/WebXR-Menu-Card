import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ position, scale = [8, 8, 8], modelName }) => {
  const gltf = useLoader(GLTFLoader, `/models/Chilli.glb`);
  const modelRef = useRef();

  return (
    <group ref={modelRef} position={position} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default Model;
