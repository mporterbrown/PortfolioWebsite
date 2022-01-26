import React, { useRef } from 'react';
import { OrbitControls } from "@react-three/drei"
import { useFrame } from '@react-three/fiber';

export function WireSphere(props) {
    const color = props.color
    const wireSphereRef = useRef();

    useFrame(({ clock }) =>{
        wireSphereRef.current.rotation.y += 0.005
    });

    return <>
        <mesh 
            ref={wireSphereRef}
            scale={1.2}
        >
            <sphereBufferGeometry args={[2, 20, 20]}/>
            <meshBasicMaterial color={color} wireframe={true}/>
        </mesh>
        <OrbitControls 
            enablePan={false}
        />
    </>;
}