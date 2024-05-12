import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Model from "./Model";
import Chilli from "./Chilli";
import Lolipop from "./Lolipop";
import Fried from "./Fried";
import Soup from "./Soup";
import EggSchezwan from "./EggSchezwan";
import ChickenRice from "./ChickenRice";
import Gravy from "./Gravy";
import Manchurian from "./Manchurian";
import Noodles from "./Noodles";
import SchezwanRice from "./SchezwanRice";

const XrHitModel = (props) => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);
  const { isPresenting } = useXR();
  const [placingEnabled, setPlacingEnabled] = useState(true);
  const { camera } = useThree();
  const gltf = useLoader(GLTFLoader, `/models/Soup.glb`);
  useEffect(() => {
    setPlacingEnabled(models.length === 0);
  }, [models]);

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix, hit) => {
    if (!placingEnabled) {
      reticleRef.current.visible = true;
      reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
      return;
    }

    if (hit) {
      reticleRef.current.visible = true;
      hitMatrix.decompose(
        reticleRef.current.position,
        reticleRef.current.quaternion,
        reticleRef.current.scale
      );
      reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
    } else {
      reticleRef.current.visible = false;
    }
  });

  const placeModel = (e) => {
    if (!placingEnabled) return;
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([{ position, id }]);
  };

  const selectedComponent = {
    Chilli,
    Lolipop,
    Fried,
    Soup,
    EggSchezwan,
    ChickenRice,
    Gravy,
    Manchurian,
    Noodles,
    SchezwanRice,
  }[props.selectedFood] || Model;

  return (
    <>
      <ambientLight />
      {isPresenting &&
        models.map(({ position, id }) => {
          const SelectedModel = selectedComponent;
          return (
            <group key={id} position={position}>
              <SelectedModel position={position}/>
              <OrbitControls
                enabled={!placingEnabled && isPresenting}
                enablePan={false}
                enableZoom={true}
                enableRotate={true}
                args={[camera]}
              />
            </group>
          );
        })}
      {isPresenting && (  
        <Interactive onSelect={placeModel}>
          <mesh
            ref={reticleRef}
            rotation-x={-Math.PI / 2}
            onClick={placeModel}
          >
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}
    </>
  );
};

export default XrHitModel;
