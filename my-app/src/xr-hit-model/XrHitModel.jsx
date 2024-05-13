import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState, useEffect } from "react";
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

  useEffect(() => {
    setPlacingEnabled(models.length === 0);
  }, [models]);

  useThree(({ camera }) => {
    console.log("Camera Position:", camera.position);
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix, hit) => {
    if (!placingEnabled) {
      return;
    }

    if (hit) {
      reticleRef.current.visible = true;
      hitMatrix.decompose(
        reticleRef.current.position,
        reticleRef.current.quaternion,
        reticleRef.current.scale
      );
    } else {
      reticleRef.current.visible = false;
    }
  });
  let SelectedModel;
  const placeModel = (e) => {
    if (!placingEnabled) return;
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([{ position, id }]);
  };

  const selectedComponent =
    {
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
              <SelectedModel />
              <OrbitControls />
            </group>
          );
        })}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2} onClick={placeModel}>
            <ringGeometry args={[0.1, 0.25, 30]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}
      

    </>
  );
};

export default XrHitModel;
