import { Canvas, useLoader } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function CarModelThreeJS({ modelURl }: { modelURl: string }) {
  function Model() {
    const result = useLoader(GLTFLoader, modelURl);
    return <primitive object={result.scene} />;
  }
  const color = "#000";

  return (
    <div style={{ background: color, height: "800px" }}>
      <Canvas shadows camera={{ position: [1, 0, 0], fov: 35 }}>
        <Stage
          intensity={1.5}
          environment={undefined}
          shadows={{ type: "accumulative", color, colorBlend: 2, opacity: 2 }}
          adjustCamera={0.9}
        >
          <Model />
        </Stage>
        <OrbitControls
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
