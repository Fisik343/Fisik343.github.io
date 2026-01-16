import { useRef, useEffect } from "react";
import { Header, Page } from "../../common";
import { Alert, Box } from "@mui/material";
import {
  AmbientLight,
  Clock,
  type ColorRepresentation,
  LineBasicMaterial,
  Material,
  Mesh,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PointLight,
  RingGeometry,
  Scene,
  SphereGeometry,
  Vector3,
  WebGLRenderer,
} from "three";
import { EffectComposer, RenderPass } from "three/addons";
import { FXAAPass } from "three/addons/postprocessing/FXAAPass.js";

const ASPECT = 4 / 3;
const ORBIT_RES = 128;

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
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;

    // Attach renderer to DOM
    if (!currentContainer.children.length) {
      currentContainer.appendChild(renderer.domElement);
    }

    // Initial camera setup
    const camera = new PerspectiveCamera(80, ASPECT, 0.1, 1000);
    camera.position.set(30, 60, 0);
    camera.lookAt(0, 0, 0);

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
    };
    window.addEventListener("resize", resetView);
    // Reset the view to fit the container
    resetView();

    // Initial scene setup
    const scene = new Scene();
    const clock = new Clock();

    // Set up composer
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    // Set up FXAA
    const fxaa = new FXAAPass();
    composer.addPass(fxaa);

    // Build scene geometry
    // Planets
    const planets: Array<Planet> = [];
    for (const planetDef of planetDefs) {
      const geo = new SphereGeometry(planetDef.radius);
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
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      planets.push(planet);
      scene.add(mesh);
    }

    // Orbits
    const orbits: Array<Mesh> = [];
    for (const planetDef of planetDefs) {
      const orbitGeo = new RingGeometry(
        planetDef.orbitRadius - 0.06,
        planetDef.orbitRadius + 0.06,
        ORBIT_RES
      );
      const orbitMat = new LineBasicMaterial({
        color: "#ffffff",
        transparent: true,
        opacity: 0.3,
      });
      const orbit = new Mesh(orbitGeo, orbitMat);
      orbit.geometry.rotateX(Math.PI / -2);
      orbits.push(orbit);
      scene.add(orbit);
    }

    // Sun
    const sunGeo = new SphereGeometry(3.2);
    const sunMat = new MeshStandardMaterial({
      color: "#ffe590",
      emissive: "#ffe590",
      emissiveIntensity: 1,
    });
    const sunMesh = new Mesh(sunGeo, sunMat);
    sunMesh.castShadow = false; // Explicitly turn off shadow casting
    scene.add(sunMesh);

    // Add lighting
    const ambLight = new AmbientLight("#353535");
    scene.add(ambLight);

    const sunLight = new PointLight("#fff9eb", 8, 0, 0.2);
    sunLight.castShadow = true;
    sunLight.shadow.camera.far = 100;
    sunLight.shadow.mapSize.set(1024, 1024);
    scene.add(sunLight);

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
      // renderer.render(scene, camera);
      composer.render();
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
        This is a first cut, next steps are to add camera controls and a
        selective emissive bloom pass. Maybe I'll add a skybox and come up with
        more interesting orbit patterns. Maybe moons too?
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
