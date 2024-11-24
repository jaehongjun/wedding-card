'use client';

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

interface WallInfo {
  position : [number, number, number],
  rotation:[number, number, number],
}


export default function Home() {
  return (
    <div style={{ height: "100vh", backgroundColor: "#000" }}>
      <Canvas camera={{ position: [0, 3, 10], fov: 75 }}>
        {/* 카메라 제어 */}
        <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />

        {/* 조명 */}
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 5, 0]} intensity={1} />

        {/* 장면 */}
        <Suspense fallback={null}>
          <Room />
          <Mobiles />
        </Suspense>
      </Canvas>
    </div>
  );
}

// 방 구성
const Room = () => {
  return (
    <group>
      {/* 바닥 */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      {/* 천장 */}
      <mesh position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* 벽 */}
      {[
        { position: [0, 0, -7.5], rotation: [0, 0, 0] }, // 뒷벽
        { position: [0, 0, 7.5], rotation: [0, Math.PI, 0] }, // 앞벽
        { position: [-7.5, 0, 0], rotation: [0, Math.PI / 2, 0] }, // 왼쪽 벽
        { position: [7.5, 0, 0], rotation: [0, -Math.PI / 2, 0] }, // 오른쪽 벽
      ].map((wall, i) => (
        <mesh key={i} position={wall.position as [number, number,number]} rotation={wall.rotation as [number, number,number]}>
          <planeGeometry args={[15, 5]} />
          <meshStandardMaterial color="#777" side={2} />
        </mesh>
      ))}
    </group>
  );
};

// 원형으로 배치된 모빌 구성
const Mobiles = () => {
  const radius = 5; // 원형 배치 반지름
  const mobileCount = 8; // 모빌 개수
  const angleStep = (2 * Math.PI) / mobileCount;

  return (
    <>
      {Array.from({ length: mobileCount }).map((_, i) => {
        const angle = i * angleStep;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        return <Mobile key={i} position={[x, 3.5, z]} />;
      })}
    </>
  );
};

// 개별 모빌
const Mobile: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const groupRef = useRef<THREE.Group>(null);

  // 항상 방 중앙을 향하게 회전
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.lookAt(new THREE.Vector3(0, 3.5, 0)); // 중앙의 고정된 위치를 바라봄
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* 줄 */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 2, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* 세 개의 2D 액자 */}
      <group position={[0, -2, 0]}>
        {Array.from({ length: 3 }).map((_, i) => (
          <group key={i} position={[0, -i * 0.7, 0]}>
            {/* 줄에서 액자까지 연결 */}
            <mesh position={[0, 0.35, 0]}>
              <cylinderGeometry args={[0.01, 0.01, 0.35, 16]} />
              <meshStandardMaterial color="black" />
            </mesh>
            {/* 액자 */}
            <mesh>
              <planeGeometry args={[0.6, 0.4]} />
              <meshStandardMaterial color={`hsl(${(i + 1) * 60}, 50%, 50%)`} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
};
