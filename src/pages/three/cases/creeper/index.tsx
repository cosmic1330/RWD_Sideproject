import { useEffect, useRef } from "react";
import * as THREE from "three";
import Creeper from "./Creeper";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const CreeperComponent = () => {
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
      camera.position.set(-50, 50, 50); // 相機位置
      camera.lookAt(scene.position); // 相機焦點

      // 簡單的地板
      const planeGeometry = new THREE.PlaneGeometry(60, 60)
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      let plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.rotation.x = -0.5 * Math.PI
      plane.position.set(0, -7, 0)
      plane.receiveShadow = true
      scene.add(plane)

      // 生成苦力怕並加到場景
      function createCreeper() {
          const creeperObj = new Creeper()
          scene.add(creeperObj.creeper)
      }
      createCreeper();

      // 建立光源
      // 設置環境光提供輔助柔和白光
      let ambientLight = new THREE.AmbientLight(0x404040)
      scene.add(ambientLight)

      // 設置聚光燈幫忙照亮物體
      let spotLight = new THREE.SpotLight(0xf0f0f0)
      spotLight.position.set(-10, 30, 20)
      // spotLight.castShadow = true
      scene.add(spotLight)
      // let spotHelper = new THREE.SpotLightHelper(spotLight)
      // scene.add(spotHelper)

      // 移動點光源
      let pointLight = new THREE.PointLight(0xccffcc, 1, 100) // 顏色, 強度, 距離
      pointLight.castShadow = true // 投影
      scene.add(pointLight)

      // 小球體模擬點光源實體
      const sphereLightGeo = new THREE.SphereGeometry(.5)
      const sphereLightMat = new THREE.MeshBasicMaterial({ color: 'red' })
      let sphereLightMesh = new THREE.Mesh(sphereLightGeo, sphereLightMat)
      sphereLightMesh.castShadow = true
      sphereLightMesh.position.y = 16
      scene.add(sphereLightMesh)
      
      let rotateAngle=0
      function pointLightAnimation() {
          if (rotateAngle > 2 * Math.PI) {
              rotateAngle = 0 // 超過 360 度後歸零
          } else {
              rotateAngle += 0.03 // 遞增角度
          }

          // 光源延橢圓軌道繞 Y 軸旋轉
          sphereLightMesh.position.x = 10 * Math.cos(rotateAngle);
          sphereLightMesh.position.z = 10 * Math.sin(rotateAngle);

          // 點光源位置與球體同步
          pointLight.position.copy(sphereLightMesh.position);
      }

      // 建立動畫
      const animate = function () {
          requestAnimationFrame( animate );
          pointLightAnimation();
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

export default CreeperComponent;
