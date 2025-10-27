import {Canvas} from "@react-three/fiber"
import './styles.css'
import { meshBounds } from "@react-three/drei"


export const App=() => (<Canvas>
  <Shirt/>
</Canvas>
)

function Shirt (){
  return(
    <mesh>
      <boxGeometry args={[1,1,1]}/>
      <meshNormalMaterial/>
    </mesh>
  )
}