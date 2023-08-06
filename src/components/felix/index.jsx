import React, { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import modelPath from "../felix/felix4.glb"
import { OrbitControls } from "@react-three/drei"
import * as THREE from 'three'

export default function Felix() {
    const felix = useLoader(GLTFLoader, modelPath)
    let felixRef = useRef()

    useFrame(() => {
        felixRef.current.rotation.y -= 0.006
    })

    return ( 
        <>
            <primitive 
                ref={felixRef}
                object={felix.scene} 
                position={new THREE.Vector3(-0.4, -0.7, -0.2)}
                scale={0.22}
            />
            <OrbitControls 
                enablePan={false}
            />
        </>  
    )
}