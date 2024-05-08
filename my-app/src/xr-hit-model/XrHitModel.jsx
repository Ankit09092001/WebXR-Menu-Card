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
  const { camera } = useThree();

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

  let selectedComponent;
  switch (props.selectedFood) {
    case "Chilli":
      selectedComponent = Chilli;
      break;
    case "Lolipop":
      selectedComponent = Lolipop;
      break;
    case "Fried":
      selectedComponent = Fried;
      break;
    case "ChickenRice":
      selectedComponent = ChickenRice;
      break;
    case "EggSchezwan":
      selectedComponent = EggSchezwan;
      break;
    case "Gravy":
      selectedComponent = Gravy;
      break;
    case "Manchurian":
      selectedComponent = Manchurian;
      break;
    case "Noodles":
      selectedComponent = Noodles;
      break;
    case "SchezwanRice":
      selectedComponent = SchezwanRice;
      break;
    case "Soup":
      selectedComponent = Soup;
      break;
    default:
      selectedComponent = Model;
  }

  return (
    <>
      <ambientLight />
      <OrbitControls
        enabled={!placingEnabled && isPresenting}
        enablePan={false}
        enableZoom={true}
        args={[camera]}
      />
      {isPresenting &&
        models.map(({ position, id }) => {
          const SelectedModel = selectedComponent;
          return (
            <group key={id} position={position}>
              <SelectedModel />
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
