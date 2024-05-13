import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ position, rotation, scale = [10, 10, 10], modelName }) => {
  const gltf = useLoader(GLTFLoader, `/models/chilli.glb`);
  const modelRef = useRef();

  useEffect(() => {
    // Update the position of the model when the position prop changes
    if (modelRef.current && position) {
      modelRef.current.position.set(position.x, position.y, position.z);
    }
  }, [position]);

  return (
    <group ref={modelRef} position={position} rotation={rotation} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default Model;
