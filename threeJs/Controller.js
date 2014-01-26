//-----------------------------------------------------------------FIELDS:

var ourEngine = []; //Works as aggregator



//--------------------------------------------------------------FUNCTIONS:
/*
 * Sets up Camera, Scene, and Renderer
 */
var init = function () {
	//Init Scene
	ourEngine.scene = new THREE.Scene();
	
	//Init Camera
	ourEngine.camera = new THREE.PerspectiveCamera(
										75, //FOVY
										window.innerWidth/window.innerHeight, //ASPECT
										0.1, //CLIP NEAR
										1000); //CLIP FAR
	ourEngine.camera.position.set(0,0,7);
	//Init Renderer
	ourEngine.renderer = new THREE.WebGLRenderer();
	ourEngine.renderer.setSize(window.innerWidth, window.innerHeight);
	//Add renderer to HTML document (It is a <canvas> element)
	document.body.appendChild(ourEngine.renderer.domElement);

	//Create Model
	ourEngine.model = new GameModel();
	var uniforms = { texture: { type: "t", value: THREE.ImageUtils.loadTexture( "Tear.png" ) } };
	ourEngine.ourShader = new THREE.ShaderMaterial({
		uniforms: uniforms,
		transparent: true,
		vertexShader: document.getElementById("VertexShader").innerHTML,
		fragmentShader: document.getElementById("FragmentShader").innerHTML
	});

	drawScene();
}

var drawScene = function () {
	ourEngine.model.step();
	requestAnimationFrame(drawScene);
	ourEngine.renderer.render(ourEngine.scene, ourEngine.camera);
};

init();

/*
 * Key listener
 */
window.onkeydown = function(e) {

	var key = e.keyCode ? e.keyCode : e.which;

	ourEngine.model.moveThelma(key);
}
//}

