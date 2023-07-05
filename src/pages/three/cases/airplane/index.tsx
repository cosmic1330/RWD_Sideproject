import { useEffect, useRef } from "react";
import * as THREE from "three";
import AirPlane from "./airplane";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const AirPlaneComponent = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    if (mountRef.current) {
      // 建立場景
      const scene = new THREE.Scene();
      renderer.setSize(
        mountRef.current.offsetWidth,
        mountRef.current.offsetHeight
      );
      renderer.setClearColor(0xeeeeee, 1.0); // 預設背景顏色
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = 2; // THREE.PCFSoftShadowMap
      mountRef.current.appendChild(renderer.domElement);

      // 建立相機
      const camera = new THREE.PerspectiveCamera(
        50,
        mountRef.current.offsetHeight / mountRef.current.offsetWidth,
        0.1,
        1000
      );
      camera.position.set(100, 100, 100); // 相機位置
      camera.lookAt(scene.position); // 相機焦點

      // 建立座標軸
      let axis = new THREE.AxesHelper(100);
      scene.add(axis);

      // 建立群組物件
      let group = new THREE.Group();
      scene.add(group);
      
      // 建立飛機
      var airplane;
      function createPlane(){ 
          airplane = new AirPlane();
          airplane.mesh.scale.set(.25,.25,.25);
          airplane.mesh.position.y = 0;
          scene.add(airplane.mesh);
      }
      createPlane();

      // 建立光源
      let hemisphereLight  = new THREE.HemisphereLight(0xffffff, 0x333333, 2.5);
      hemisphereLight .position.set(100, 0, -50); 
      scene.add( hemisphereLight );

      // 控制鍵
      const controls = new OrbitControls( camera, renderer.domElement );

      // 建立動畫
      const animate = function () {
          requestAnimationFrame( animate );
          airplane.propeller.rotation.x += 0.1;
          renderer.render( scene, camera );
      };

      animate();
    }

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ width: "100%", paddingBottom: "70.7%" }} ref={mountRef} />
  );
};

export default AirPlaneComponent;
