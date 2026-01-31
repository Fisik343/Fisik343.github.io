import { useRef, useEffect } from "react";
import { Header, Page } from "../../common";
import { Alert, Box } from "@mui/material";
import {
  AmbientLight,
  Clock,
  type ColorRepresentation,
  HalfFloatType,
  Layers,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  NeutralToneMapping,
  Object3D,
  // PCFSoftShadowMap,
  PerspectiveCamera,
  PointLight,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  TorusGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
  WebGLRenderTarget,
} from "three";
import {
  EffectComposer,
  OutputPass,
  RenderPass,
  ShaderPass,
  UnrealBloomPass,
} from "three/addons";
import { FXAAPass } from "three/addons/postprocessing/FXAAPass.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const ASPECT = 4 / 3;
const ORBIT_RES = 128;
const BLOOM_LAYER = 1;
const BLOOM_STRENGTH = 1.0;
const BLOOM_RADIUS = 0.3;
const BLOOM_THRESH = 0.5;

type PlanetDef = {
  radius: number;
  color: ColorRepresentation;
  orbitRadius: number;
  orbitSpeed: number;
};

type Planet = {
  mesh: Mesh;
  orbitRadius: number;
  orbitSpeed: number;
  theta: number;
};

const planetDefs: Array<PlanetDef> = [
  {
    radius: 0.6,
    color: "#e4dad5",
    orbitRadius: 8,
    orbitSpeed: 2,
  },
  {
    radius: 0.9,
    color: "#eba66e",
    orbitRadius: 14,
    orbitSpeed: 1,
  },
  {
    radius: 0.8,
    color: "#447bc3",
    orbitRadius: 20,
    orbitSpeed: 0.6,
  },
  {
    radius: 0.7,
    color: "#cf5b44",
    orbitRadius: 28,
    orbitSpeed: 0.41,
  },
  {
    radius: 1.5,
    color: "#e7b16c",
    orbitRadius: 40,
    orbitSpeed: 0.32,
  },
  {
    radius: 1.3,
    color: "#d6a64d",
    orbitRadius: 52,
    orbitSpeed: 0.23,
  },
  {
    radius: 1.1,
    color: "#90dee8",
    orbitRadius: 65,
    orbitSpeed: 0.15,
  },
  {
    radius: 0.8,
    color: "#6388ce",
    orbitRadius: 80,
    orbitSpeed: 0.09,
  },
];

const getPlanetPosition = (planet: Planet) => {
  const x = Math.cos(planet.theta) * planet.orbitRadius;
  const z = Math.sin(planet.theta) * planet.orbitRadius;
  return new Vector3(x, 0, z);
};

function ThreeSolar() {
  const sceneContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make my life easier and appease strict mode (aka make sure I'm not being an idiot)
    const currentContainer = sceneContainer.current;
    if (!currentContainer) {
      return;
    }

    // Set up renderer
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setClearAlpha(0); // Transparent background
    renderer.setPixelRatio(Math.min(window.devicePixelRatio * 2, 3)); // Adjust for device dpi
    renderer.toneMapping = NeutralToneMapping;
    // renderer.shadowMap.enabled = true;
    // renderer.shadowMap.type = PCFSoftShadowMap;

    // Attach renderer to DOM
    if (!currentContainer.children.length) {
      currentContainer.appendChild(renderer.domElement);
    }

    // Initial camera setup
    const camera = new PerspectiveCamera(70, ASPECT, 0.1, 1000);
    camera.position.set(33, 66, 0);
    camera.lookAt(0, 0, 0);

    // Set up camera controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxDistance = 120;
    controls.minDistance = 5;
    controls.enableDamping = true;
    controls.update();

    // Initial scene setup
    const scene = new Scene();
    const clock = new Clock();

    // Set up bloom
    const bloomLayer = new Layers();
    bloomLayer.set(BLOOM_LAYER);
    const bloomRenderTarget = new WebGLRenderTarget(
      currentContainer.clientWidth,
      currentContainer.clientHeight,
      { type: HalfFloatType }
    );
    const bloomPass = new UnrealBloomPass(
      new Vector2(currentContainer.clientWidth, currentContainer.clientHeight),
      BLOOM_STRENGTH,
      BLOOM_RADIUS,
      BLOOM_THRESH
    );
    bloomPass.resolution.set(
      currentContainer.clientWidth,
      currentContainer.clientHeight
    );
    const bloomComposer = new EffectComposer(renderer, bloomRenderTarget);
    const bloomRenderPass = new RenderPass(scene, camera);
    bloomComposer.addPass(bloomRenderPass);
    bloomComposer.addPass(bloomPass);
    bloomComposer.addPass(new OutputPass());

    const mixPass = new ShaderPass(
      new ShaderMaterial({
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: bloomComposer.renderTarget2.texture },
        },
        vertexShader: `
          varying vec2 vUv;

			    void main() {
				    vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
        `,
        fragmentShader: `
          uniform sampler2D baseTexture;
          uniform sampler2D bloomTexture;
          varying vec2 vUv;

          void main() {
            gl_FragColor = ( texture2D( baseTexture, vUv ) + texture2D( bloomTexture, vUv ) );
          }
        `,
        defines: {},
      }),
      "baseTexture"
    );
    mixPass.needsSwap = true;

    // Set up composer
    const outRenderTarget = new WebGLRenderTarget(
      currentContainer.clientWidth,
      currentContainer.clientHeight,
      { type: HalfFloatType, samples: 4 }
    );
    const renderPass = new RenderPass(scene, camera);
    const outComposer = new EffectComposer(renderer, outRenderTarget);

    outComposer.addPass(renderPass);
    outComposer.addPass(mixPass);
    outComposer.addPass(new FXAAPass());
    outComposer.addPass(new OutputPass());

    // Build scene geometry
    // Planets
    const planets: Array<Planet> = [];
    for (const planetDef of planetDefs) {
      const geo = new SphereGeometry(planetDef.radius, 64, 32);
      const mat = new MeshStandardMaterial({
        color: planetDef.color,
        roughness: 0.8,
      });
      const mesh = new Mesh(geo, mat);
      const planet: Planet = {
        mesh: mesh,
        orbitRadius: planetDef.orbitRadius,
        orbitSpeed: planetDef.orbitSpeed,
        theta: Math.random() * 2 * Math.PI,
      };
      mesh.position.copy(getPlanetPosition(planet));
      // mesh.castShadow = true;
      // mesh.receiveShadow = true;
      planets.push(planet);
      scene.add(mesh);
    }

    // Orbits
    const orbits: Array<Mesh> = [];
    for (const planetDef of planetDefs) {
      const orbitGeo = new TorusGeometry(
        planetDef.orbitRadius,
        0.06,
        12,
        ORBIT_RES
      );
      const orbitMat = new MeshBasicMaterial({
        color: "#888888",
      });
      const orbit = new Mesh(orbitGeo, orbitMat);
      orbit.geometry.rotateX(Math.PI / -2);
      orbits.push(orbit);
      scene.add(orbit);
    }

    // Sun
    const sunGeo = new SphereGeometry(3.2, 128, 64);
    const sunMat = new MeshStandardMaterial({
      color: "#ffe590",
      emissive: "#ffe590",
      emissiveIntensity: 1,
    });
    const sunMesh = new Mesh(sunGeo, sunMat);
    sunMesh.layers.enable(BLOOM_LAYER);
    // sunMesh.castShadow = false; // Explicitly turn off shadow casting
    scene.add(sunMesh);

    // Add lighting
    const ambLight = new AmbientLight("#353535");
    scene.add(ambLight);

    const sunLight = new PointLight("#fff9eb", 8, 0, 0.2);
    // sunLight.castShadow = true;
    // sunLight.shadow.camera.far = 100;
    // sunLight.shadow.mapSize.set(2048, 2048);
    scene.add(sunLight);

    // TODO: Revisit faking sun casting light for less obvious point light shadows
    // const sunLightPositions = [
    //   { x: 0, y: 3.2, z: 0 },
    //   { x: 0, y: 0, z: 0 },
    //   { x: 0, y: -3.2, z: 0 },
    // ];
    // const sunLights: Array<PointLight> = [];
    // for (const pos of sunLightPositions) {
    //   const light = new PointLight("#fff9eb", 4, 0, 0.2);
    //   light.position.set(pos.x, pos.y, pos.z);
    //   light.castShadow = true;
    //   light.shadow.camera.far = 100;
    //   light.shadow.mapSize.set(1024, 1024);
    //   sunLights.push(light);
    //   scene.add(light);
    // }

    // Set up camera/canvas reset logic
    const resetView = () => {
      // Update the renderer
      renderer.setSize(
        currentContainer.clientWidth,
        currentContainer.clientHeight
      );
      // Fix camera aspect ratio
      camera.aspect =
        currentContainer.clientWidth / currentContainer.clientHeight;
      camera.updateProjectionMatrix();

      bloomComposer.setSize(
        currentContainer.clientWidth,
        currentContainer.clientHeight
      );
      bloomPass.resolution.set(
        currentContainer.clientWidth,
        currentContainer.clientHeight
      );
      outComposer.setSize(
        currentContainer.clientWidth,
        currentContainer.clientHeight
      );
    };
    window.addEventListener("resize", resetView);
    // Reset the view to fit the container
    resetView();

    const darkMaterial = new MeshBasicMaterial({ color: 0x000000 });
    const materials: Record<string, Material> = {};

    function darkenNonBloomed(obj: Object3D) {
      if (obj instanceof Mesh && !bloomLayer.test(obj.layers)) {
        materials[obj.uuid] = obj.material;
        obj.material = darkMaterial;
      }
    }

    function restoreMaterial(obj: Object3D) {
      if (obj instanceof Mesh && materials[obj.uuid]) {
        obj.material = materials[obj.uuid];
        delete materials[obj.uuid];
      }
    }

    // Handle scene animation
    let runAnimate = true;
    let aniFrame = 0;
    const animate = () => {
      if (!runAnimate) {
        return;
      }
      aniFrame = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      for (const planet of planets) {
        planet.theta =
          (planet.theta + delta * planet.orbitSpeed) % (2 * Math.PI);
        planet.mesh.position.copy(getPlanetPosition(planet));
      }
      controls.update();
      scene.traverse(darkenNonBloomed);
      bloomComposer.render();
      scene.traverse(restoreMaterial);
      mixPass.uniforms.bloomTexture.value = bloomComposer.renderTarget2.texture;
      outComposer.render();
    };
    animate();

    // Cleanup
    return () => {
      runAnimate = false; // Prevent future animates
      cancelAnimationFrame(aniFrame);
      currentContainer.removeChild(renderer.domElement);
      for (const planet of planets) {
        planet.mesh.geometry.dispose();
        (planet.mesh.material as Material).dispose();
      }
      for (const orbit of orbits) {
        orbit.geometry.dispose();
        (orbit.material as Material).dispose();
      }
      sunGeo.dispose();
      sunMat.dispose();
      ambLight.dispose();
      sunLight.dispose();
      renderer.dispose();
      window.removeEventListener("resize", resetView);
    };
  }, []);

  return (
    <Page>
      <Header>three.js Solar System</Header>
      <Alert variant="outlined" severity="info">
        This was not designed for mobile &ndash; your mileage may vary if
        viewing from a mobile device.
        <br />
        This is a work in progress. Maybe next I'll add a skybox and come up
        with more interesting orbit patterns. Possibly moons too?
      </Alert>
      <Box
        sx={{
          width: "100%",
          aspectRatio: ASPECT,
          overflow: "hidden",
          border: "1px solid white",
          borderRadius: "4px",
        }}
        ref={sceneContainer}
      />
    </Page>
  );
}

export default ThreeSolar;
