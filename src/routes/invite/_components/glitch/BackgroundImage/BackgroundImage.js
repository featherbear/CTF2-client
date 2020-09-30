import fragmentShader from './Fragment.shader'
import vertexShader from './Vertex.shader'

export default class {
  constructor (imagePath) {
    this.imagePath = imagePath
    this.uniforms = {
      resolution: {
        type: 'v2',
        value: new THREE.Vector2(document.body.clientWidth, window.innerHeight)
      },
      imageResolution: {
        type: 'v2',
        value: new THREE.Vector2(2048, 1356)
      },
      texture: {
        type: 't',
        value: null
      }
    }
  }

  init (callback) {
    const loader = new THREE.TextureLoader()
    loader.load(this.imagePath, tex => {
      this.uniforms.texture.value = tex
      this.obj = this.createObj()
      callback()
    })
  }

  createObj () {
    return new THREE.Mesh(
      new THREE.PlaneBufferGeometry(2, 2),
      new THREE.RawShaderMaterial({
        uniforms: this.uniforms,
        vertexShader,
        fragmentShader
      })
    )
  }

  resize () {
    this.uniforms.resolution.value.set(
      document.body.clientWidth,
      window.innerHeight
    )
  }
}
