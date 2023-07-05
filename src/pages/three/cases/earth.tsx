import * as CANNON from "cannon";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import EarthImage4 from "../../../images/three/earth4.jpg";

const Earth = () => {
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
      camera.position.set(0, 0, 500); // 相機位置
      camera.lookAt(scene.position); // 相機焦點

      // 建立座標軸
      let axis = new THREE.AxesHelper(20);
      scene.add(axis);

      // 建立群組物件
      const group = new THREE.Group();
      scene.add(group);

      // 建立地球
      var globeTextureLoader = new THREE.TextureLoader();
      globeTextureLoader.load(EarthImage4, function (texture) {
        let globeGgeometry = new THREE.SphereGeometry(100, 50, 50);
        // let material = new THREE.MeshPhongMaterial({color: '#afa', wireframe: true});
        let material = new THREE.MeshStandardMaterial({ map: texture });
        let globeMesh = new THREE.Mesh(globeGgeometry, material);
        group.add(globeMesh);
      });

      // 建立光源
      let hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x333333, 2.5);
      hemisphereLight.position.set(100, 0, -50);
      scene.add(hemisphereLight);

      // 建立動畫
      const animate = function () {
        requestAnimationFrame(animate);
        group.rotation.y -= 0.005;
        renderer.render(scene, camera);
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

export default Earth;
