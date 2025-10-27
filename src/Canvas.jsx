import { Canvas } from "@react-three/fiber"
import './styles.css'
import { Center, OrbitControls,useGLTF} from "@react-three/drei"
import React, { useRef } from 'react'


export const App = ({ position = [-1, 0, 2.5], fov = 25 }) => (
  <Canvas 
  eventSource={document.getElementById('root')}
  eventPrefix="client"
  camera={{ position, fov }}>
    <Center>
       <Shirt />
    </Center>

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
useGLTF.preload('/TShirtGltfB.glb')
