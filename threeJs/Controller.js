
//function controller(){
//-----------------------------------------------------------------FIELDS:
var ourEngine = [];



//--------------------------------------------------------------FUNCTIONS:

var init = function () {
	ourEngine.scene = new THREE.Scene();
	ourEngine.camera = new THREE.PerspectiveCamera(75, //FOVY
										 window.innerWidth/window.innerHeight, //ASPECT
										 0.1, //CLIP NEAR
										 1000); //CLIP FAR
	ourEngine.camera.position.set(0,0,7);
	//ourEngine.camera.lookAt(ourEngine.scene.position);
	ourEngine.renderer = new THREE.WebGLRenderer();
	ourEngine.renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(ourEngine.renderer.domElement);
	//ourEngine.camera.position.z = 5; //TODO change!
	ourEngine.model = new GameModel();
	var uniforms = { texture: { type: "t", value: THREE.ImageUtils.loadTexture( "Tear.png" ) } };
	ourEngine.ourShader = new THREE.ShaderMaterial({
		uniforms: uniforms,
		transparent: true,
		vertexShader: document.getElementById("VertexShader").innerHTML,
		fragmentShader: document.getElementById("FragmentShader").innerHTML
	});
}

var drawScene = function () {
	ourEngine.model.step();
	requestAnimationFrame(drawScene);
	ourEngine.renderer.render(ourEngine.scene, ourEngine.camera);
};

//TEMP:
// var geometry = new THREE.PlaneGeometry(1,1,1);	
// var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);



init();
drawScene();

window.onkeydown = function(e) {

	var key = e.keyCode ? e.keyCode : e.which;

	ourEngine.model.moveThelma(key);
}
//}

