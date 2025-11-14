import { test, expect } from "vitest"
import * as THREE from "three"
import Gallery from "../gallery"

const mockInfos = [
  {
    width: 512,
    height: 512,
    aspectRatio: 1,
    uvs: { xStart: 0, xEnd: 1, yStart: 0, yEnd: 1 },
  },
]

function makeTexture(): THREE.Texture {
  const c = document.createElement("canvas")
  c.width = 1
  c.height = 1
  const t = new THREE.Texture(c)
  t.needsUpdate = true
  return t
}

test("instanced material uniforms are correctly shaped", async () => {
  const scene = new THREE.Scene()
  const g = new Gallery({ scene, cameraZ: 5 })
  ;(g as any).imageInfos = mockInfos
  ;(g as any).atlasTexture = makeTexture()
  ;(g as any).createInstancedMesh()
  const m = (g as any).instancedMaterial
  expect(m).toBeTruthy()
  expect(typeof m.uniforms.uTime.value).toBe("number")
  expect(typeof m.uniforms.uScrollY.value).toBe("number")
  expect(typeof m.uniforms.uZrange.value).toBe("number")
  expect(typeof m.uniforms.uMaxZ.value).toBe("number")
  expect(typeof m.uniforms.uSpeedY.value).toBe("number")
  expect(typeof m.uniforms.uDirection.value).toBe("number")
  expect(m.uniforms.uAtlas.value).toBeInstanceOf(THREE.Texture)
})

test("centered material uniforms are correctly shaped", async () => {
  const scene = new THREE.Scene()
  const g = new Gallery({ scene, cameraZ: 5 })
  ;(g as any).imageInfos = mockInfos
  ;(g as any).atlasTexture = makeTexture()
  ;(g as any).createCenteredMesh()
  const m = (g as any).material
  expect(m).toBeTruthy()
  expect(m.uniforms.uAtlas.value).toBeInstanceOf(THREE.Texture)
  expect(m.uniforms.uTextureCoords.value).toBeInstanceOf(THREE.Vector4)
})

test("guards prevent mesh creation when atlas not ready", () => {
  const scene = new THREE.Scene()
  const g = new Gallery({ scene, cameraZ: 5 })
  ;(g as any).createInstancedMesh()
  ;(g as any).createCenteredMesh()
  expect((g as any).instancedMaterial).toBeUndefined()
  expect((g as any).material).toBeUndefined()
})
