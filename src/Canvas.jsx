import { Canvas, useFrame } from "@react-three/fiber"
import './styles.css'
import { Center, Environment, OrbitControls, useGLTF, AccumulativeShadows, RandomizedLight } from "@react-three/drei"
import React, { useRef } from 'react'


export const App = ({ position = [0, 0, 2.5], fov = 25 }) => (
  <Canvas
    eventSource={document.getElementById('root')}
    eventPrefix="client"
    camera={{ position, fov }}>
    <ambientLight intensity={0.7} />
    <Environment preset="city" />
    {/* <CameraRig> */}

    <Center>
      <Shirt />
      <Backdrop />
    </Center>
    {/* </CameraRig> */}


    <OrbitControls />
  </Canvas>
)

function Shirt(props) {
  const { nodes, materials } = useGLTF('/TShirtGltfB.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

function Backdrop() {
  const shadows = useRef()

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}>
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}
function CameraRig({ children }) {
  const group = useRef()
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 2], 0.25, delta)
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    )
  })
  return <group ref={group}>{children}</group>
}


useGLTF.preload('/TShirtGltfB.glb')
