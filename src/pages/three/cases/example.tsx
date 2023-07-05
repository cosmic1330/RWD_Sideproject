import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeExampleComponent = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      if(mountRef.current){
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.offsetWidth / mountRef.current.offsetHeight, 0.1, 1000);
        renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight);
        mountRef.current.appendChild(renderer.domElement);
    
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
    
        camera.position.z = 5;
    
        const animate = () => {
          requestAnimationFrame(animate);
    
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
    
          renderer.render(scene, camera);
        };
    
        animate();
    }

    return () => {
        mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div style={{ width: '100%',
  paddingBottom: '70.7%' }} ref={mountRef} />;
};

export default ThreeExampleComponent;
