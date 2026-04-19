'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Torus, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function EmbroideryFrame() {
  const frameRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);
  const threadGroupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Slow rotate the frame
    if (frameRef.current) {
      frameRef.current.rotation.y = t * 0.2;
      frameRef.current.rotation.z = Math.sin(t * 0.3) * 0.05;
    }
    // Counter-rotate inner design
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.15;
    }
    // Bobbing thread group
    if (threadGroupRef.current) {
      threadGroupRef.current.rotation.y = t * 0.1;
      threadGroupRef.current.position.y = Math.sin(t * 0.8) * 0.05;
    }
  });

  // Generate thread-like curves
  const threads = useMemo(() => {
    const result = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const points = [];
      for (let j = 0; j <= 20; j++) {
        const t = j / 20;
        const x = Math.cos(angle) * (0.3 + t * 0.8);
        const y = Math.sin(t * Math.PI) * 0.3;
        const z = Math.sin(angle) * (0.3 + t * 0.8);
        points.push(new THREE.Vector3(x, y, z));
      }
      result.push(points);
    }
    return result;
  }, []);

  const goldColor = '#D4AF37';
  const maroonColor = '#6A0D25';
  const creamColor = '#FDF6EC';

  return (
    <group>
      {/* Outer embroidery hoop - thick torus */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh ref={frameRef}>
          <Torus args={[1.8, 0.12, 32, 128]}>
            <meshStandardMaterial
              color={goldColor}
              metalness={0.9}
              roughness={0.1}
              envMapIntensity={1}
            />
          </Torus>

          {/* Inner hoop ring */}
          <Torus args={[1.5, 0.06, 16, 128]}>
            <meshStandardMaterial
              color={goldColor}
              metalness={0.8}
              roughness={0.2}
            />
          </Torus>

          {/* Fabric/canvas inside the hoop */}
          <mesh ref={innerRef}>
            <circleGeometry args={[1.48, 64]} />
            <MeshDistortMaterial
              color={creamColor}
              speed={2}
              distort={0.08}
              radius={1}
              roughness={0.8}
            />
          </mesh>

          {/* Mandala embroidery design - concentric rings */}
          {[0.3, 0.6, 0.9, 1.2].map((r, i) => (
            <Torus
              key={i}
              args={[r, 0.012, 8, 64]}
              position={[0, 0, 0.02]}
            >
              <meshStandardMaterial
                color={i % 2 === 0 ? maroonColor : goldColor}
                metalness={0.5}
                roughness={0.3}
              />
            </Torus>
          ))}

          {/* Cross threads */}
          {[0, 1, 2, 3].map((i) => {
            const angle = (i / 4) * Math.PI;
            return (
              <mesh
                key={`cross-${i}`}
                position={[0, 0, 0.025]}
                rotation={[0, 0, angle]}
              >
                <boxGeometry args={[2.9, 0.012, 0.005]} />
                <meshStandardMaterial
                  color={i % 2 === 0 ? maroonColor : goldColor}
                  metalness={0.4}
                  roughness={0.4}
                />
              </mesh>
            );
          })}

          {/* Center floral design */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const a = (i / 8) * Math.PI * 2;
            return (
              <mesh
                key={`petal-${i}`}
                position={[Math.cos(a) * 0.25, Math.sin(a) * 0.25, 0.03]}
              >
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial
                  color={goldColor}
                  metalness={0.9}
                  roughness={0.1}
                />
              </mesh>
            );
          })}
          {/* Center gem */}
          <mesh position={[0, 0, 0.04]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial
              color={maroonColor}
              metalness={0.8}
              roughness={0.1}
              emissive={maroonColor}
              emissiveIntensity={0.3}
            />
          </mesh>

          {/* Diagonal decorative stitches */}
          {threads.map((points, i) => {
            const curve = new THREE.CatmullRomCurve3(points);
            const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.008, 6, false);
            return (
              <mesh key={`thread-${i}`} geometry={tubeGeometry} position={[0, 0, 0.01]}>
                <meshStandardMaterial
                  color={i % 2 === 0 ? '#8B1A34' : '#D4AF37'}
                  metalness={0.3}
                  roughness={0.5}
                  opacity={0.7}
                  transparent
                />
              </mesh>
            );
          })}
        </mesh>
      </Float>

      {/* Needle floating nearby */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <group position={[2.2, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
          {/* Needle body */}
          <mesh>
            <cylinderGeometry args={[0.015, 0.005, 1.2, 8]} />
            <meshStandardMaterial color="#C0C0C0" metalness={1} roughness={0.1} />
          </mesh>
          {/* Needle eye */}
          <mesh position={[0, 0.55, 0]}>
            <torusGeometry args={[0.04, 0.01, 8, 16]} />
            <meshStandardMaterial color="#C0C0C0" metalness={1} roughness={0.1} />
          </mesh>
          {/* Thread on needle */}
          <mesh position={[0, 0.4, 0]}>
            <cylinderGeometry args={[0.004, 0.004, 0.3, 8]} />
            <meshStandardMaterial color={goldColor} metalness={0.6} roughness={0.2} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export default function EmbroideryCanvas() {
  return (
    <div className="w-full h-[420px] lg:h-[520px] rounded-2xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFF5E1" />
        <directionalLight position={[-3, 3, 2]} intensity={0.6} color="#D4AF37" />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#FFD700" distance={8} />

        <EmbroideryFrame />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
