import React, { useRef } from "react";
import { useLoader, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Extend the react-three-fiber library with OrbitControls
extend({ OrbitControls });

const Model = ({ position, scale = [2, 2, 2], modelName }) => {
  const { camera, gl } = useThree(); // Get the camera and gl objects
  const gltf = useLoader(GLTFLoader, `/models/Lolipop.glb`);
  const modelRef = useRef();

  return (
    <>
      <group ref={modelRef} position={position} scale={scale}>
        <primitive object={gltf.scene} />
      </group>
      {/* Create OrbitControls and attach it to the camera */}
      <orbitControls args={[camera, gl.domElement]} />
    </>
  );
};

export default Model;
