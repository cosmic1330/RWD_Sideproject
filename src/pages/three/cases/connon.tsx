import * as CANNON from "cannon";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Connon = () => {
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
      camera.position.set(35, 35, 35); // 相機位置
      camera.lookAt(scene.position); // 相機焦點

      // 建立座標軸
      let axis = new THREE.AxesHelper(20);
      scene.add(axis);

      // 建立世界
      let world = new CANNON.World();
      world.gravity.set(0, -10, 0);
      world.broadphase = new CANNON.NaiveBroadphase();

      // 建立球體
      let sphereCM = new CANNON.Material();
      let sphereShape = new CANNON.Sphere(1); // Step 1 创建形状
      let sphereBody = new CANNON.Body({
        // Step 2 为形状添加刚体
        mass: 5, // 公斤
        position: new CANNON.Vec3(0, 10, 0),
        shape: sphereShape,
        material: sphereCM,
      });
      world.add(sphereBody); // Step 3 将刚体添加到世界

      // 建立平面
      let groundShape = new CANNON.Plane();
      let groundCM = new CANNON.Material();
      let groundBody = new CANNON.Body({
        mass: 0,
        shape: groundShape,
        material: groundCM,
      });
      // setFromAxisAngle 旋转 X 轴 -90 度
      groundBody.quaternion.setFromAxisAngle(
        new CANNON.Vec3(1, 0, 0),
        -1.5707963267948966
      );
      world.add(groundBody);

      // 建立碰撞交互作用屬性
      let sphereGroundContact;
      sphereGroundContact = new CANNON.ContactMaterial(groundCM, sphereCM, {
        friction: 0.5,
        restitution: 0.7,
      });
      world.addContactMaterial(sphereGroundContact);

      // 创建平面和球的网格 (前面创建的刚体在场景中并没有实际的视觉效果，这一步创建平面、球的网格。)
      // 平面网格
      let groundGeometry = new THREE.PlaneGeometry(20, 20, 32);
      let groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x7f7f7f,
        side: THREE.DoubleSide,
      });
      let ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = -0.5 * Math.PI;
      scene.add(ground);

      // 球网格
      let sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
      let sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
      let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);

      // 光
      let spotLight = new THREE.SpotLight(0xf0f0f0);
      spotLight.position.set(-10, 30, 20);
      spotLight.castShadow = true;
      scene.add(spotLight);

      let ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);

      // 建立動畫
      const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        world.step(1 / 60);

        if (sphere) {
          sphere.position.copy(sphereBody.position);
          sphere.quaternion.copy(sphereBody.quaternion);
        }
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

export default Connon;
