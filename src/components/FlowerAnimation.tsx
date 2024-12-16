import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Flower from '../assets/drop-flower.png'

const FlowerAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 씬, 카메라, 렌더러 설정
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 꽃 모양의 파티클 생성
    const flowerCount = 100;
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < flowerCount; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = Math.random() * 20;
      const z = (Math.random() - 0.5) * 20;
      positions.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const textureLoader = new THREE.TextureLoader();
    const flowerTexture = textureLoader.load(Flower); // 꽃 이미지 URL

    const material = new THREE.PointsMaterial({
      size: 0.5,
      map: flowerTexture,
      transparent: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 애니메이션 루프
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // 리사이즈 핸들러
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // 클린업
    return () => {
      if (mountRef.current) {
        (mountRef.current as HTMLElement).removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default FlowerAnimation;