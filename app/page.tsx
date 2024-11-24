"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const RoomWall = ({ position, rotation }: { position: [number, number, number]; rotation?: [number, number, number] }) => {
  return (
    <mesh position={position} rotation={rotation} receiveShadow>
      <planeGeometry args={[60, 32.36]} /> {/* 넓어진 방 크기에 맞춘 벽 */}
      <meshStandardMaterial color="#dcdcdc" />
    </mesh>
  );
};

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -16.18, 0]} receiveShadow>
      <planeGeometry args={[60, 60]} />
      <meshStandardMaterial color="#aaaaaa" />
    </mesh>
  );
};

const Ceiling = () => {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 16.18, 0]} receiveShadow>
      <planeGeometry args={[60, 60]} />
      <meshStandardMaterial color="#f0f0f0" />
    </mesh>
  );
};

const GalleryFrame = ({ position, rotation, texture }: { position: [number, number, number]; rotation?: [number, number, number]; texture: string }) => {
  const imageTexture = useTexture(texture);

  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <mesh castShadow>
        <boxGeometry args={[10, 6, 0.2]} /> {/* 프레임 크기 확대 */}
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      {/* Image */}
      <mesh position={[0, 0, 0.11]} receiveShadow>
        <planeGeometry args={[9.5, 5.5]} /> {/* 이미지 크기 확대 */}
        <meshStandardMaterial map={imageTexture} />
      </mesh>
    </group>
  );
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 50, 0]} intensity={0.7} castShadow />
    </>
  );
};

const Room = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#000" }}>
      <Canvas shadows camera={{ position: [0, 0, 35], fov: 60 }}>
        <OrbitControls
          target={[0, 0, 0]} // 방 중심을 바라보도록 설정
          enableZoom={true}
          minPolarAngle={Math.PI / 6} // 아래로 제한
          maxPolarAngle={Math.PI / 2.5} // 위로 제한
          minAzimuthAngle={-Math.PI / 4} // 좌측 회전 제한
          maxAzimuthAngle={Math.PI / 4} // 우측 회전 제한
        />
        <Lights />
        {/* Room */}
        <RoomWall position={[0, 0, -30]} /> {/* Back Wall */}
        <RoomWall position={[-30, 0, 0]} rotation={[0, Math.PI / 2, 0]} /> {/* Left Wall */}
        <RoomWall position={[30, 0, 0]} rotation={[0, -Math.PI / 2, 0]} /> {/* Right Wall */}
        <Floor />
        <Ceiling />
        {/* Gallery */}
        <GalleryFrame position={[-29.5, 5, 0]} rotation={[0, Math.PI / 2, 0]} texture="/image1.png" /> {/* Left Wall */}
        <GalleryFrame position={[29.5, 5, 0]} rotation={[0, -Math.PI / 2, 0]} texture="/image2.png" /> {/* Right Wall */}
        <GalleryFrame position={[0, 5, -29.5]} texture="/image3.png" /> {/* Back Wall */}
      </Canvas>
    </div>
  );
};

export default Room;
