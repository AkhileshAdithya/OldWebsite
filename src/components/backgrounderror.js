import React, { Component } from 'react'
import * as THREE from 'three'
import './backgrounderror.css'
var OrbitControls = require('three-orbit-controls')(THREE)

class BackgroundError extends Component {
  componentWillUnmount(){
    for(let i = 0; i < this.scene.children.length; i++){
      this.scene.children[i].geometry.dispose()
      this.scene.children[i].material.dispose()
      this.scene.remove(this.scene.children[i])
    }
  }
  componentDidMount() {
    //basic threejs stuff
    this.init()
  

    this.animate = function () {
      requestAnimationFrame(this.animate.bind(this))
      this.objectRender()
      this.renderer.render(this.scene, this.camera)
    }

    this.animate()

    window.addEventListener('resize', this.onWindowResize.bind(this), false)
  }

  //initialize threejs
  init = () => {
    //basic stuff
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(45, this.mount.offsetWidth/this.mount.offsetHeight, 0.1, 2000)
    this.camera.position.z = 1600
    this.camera.position.y = -100
    this.controls = new OrbitControls(this.camera)
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    this.mount.appendChild(this.renderer.domElement)
    //stuff for sphere thingy
    const parameters = [[ 0.25, 0xff0000, 1 ], [ 0.5, 0xff0000, 0.9 ], [ 0.75, 0xff0000, 0.75 ]];
    const geometry = this.createGeometry();
    for ( let i = 0; i < parameters.length; ++ i ) {
      const p = parameters[ i ];
      this.material = new THREE.LineBasicMaterial( { color: p[ 1 ], opacity: p[ 2 ] } );
      const line = new THREE.LineSegments( geometry, this.material );
      line.scale.x = line.scale.y = line.scale.z = p[ 0 ];
      line.userData.originalScale = p[ 0 ];
      line.rotation.y = Math.random() * Math.PI;
      line.updateMatrix();
      this.scene.add( line );
    }
  }

  createGeometry = () => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const vertex = new THREE.Vector3();
    for(let i = 0; i < 1000; i++){
      vertex.x = Math.random() * 2 - 1;
      vertex.y = Math.random() * 2 - 1;
      vertex.z = Math.random() * 2 - 1;
      vertex.normalize();
      vertex.multiplyScalar( 450 );
      vertices.push( vertex.x, vertex.y, vertex.z );
      vertex.multiplyScalar( Math.random() * 0.09 + 1 );
      vertices.push( vertex.x, vertex.y, vertex.z );
    }
    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
    return geometry;
  }
      
  onWindowResize() {
      if (this.mount) {
        this.camera.aspect = this.mount.offsetWidth / this.mount.offsetHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
      }
    }
  
  objectRender = () => {
    //this.camera.lookAt( this.scene.position );
    this.renderer.render( this.scene, this.camera );
    const time = Date.now() * 0.0001;
    for ( let i = 0; i < this.scene.children.length; i ++ ) {
      const object = this.scene.children[ i ];
      if ( object.isLine ) {
        object.rotation.y = time * ( i < 4 ? ( i + 1 ) : - ( i + 1 ) );
        if ( i < 5 ) {
          const scale = object.userData.originalScale * ( i / 5 + 1 ) * ( 1 + 0.5 * Math.cos( 7.5 * time ) )
          object.scale.x = object.scale.y = object.scale.z = scale;
        }
      }      
    }
  }

  render() {
    return (
      <div ref={ref => (this.mount = ref)} style={{ width: `100vw`, height: `100vh` }}>
        <div className="backgrounderror-name-pnf">Error, Page not found</div>
        <div className="backgrounderror-name-home"><a className="backgrounderror-name-link" href="https://akhileshadithya.github.io/">Home</a></div>
      </div>
    )
  }
}

export default BackgroundError