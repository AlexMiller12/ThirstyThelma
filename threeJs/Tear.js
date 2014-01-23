var TearObj = [];

(function(){

//--------------------------------------------------CONSTANTS/FIELDS:

	var MAX_TEAR_ROTATION = 0.05;
	var TEAR_SPEED_SCALAR = 0.06;
	var MIN_TEAR_SPEED = 0.02;
	
//------------------------------------------------------CONSTRUCTORS:

	function Tear(pos){
		
		this.speed = MIN_TEAR_SPEED + Math.random() * TEAR_SPEED_SCALAR;
		var tearGeo = new THREE.PlaneGeometry(0.5, 0.5);
		var texture = THREE.ImageUtils.loadTexture("Tear.png");
		var material = new THREE.MeshBasicMaterial({map: texture,transparent: true});
		material.side = THREE.DoubleSide;
        this.mesh = new THREE.Mesh(tearGeo, ourEngine.ourShader);
        this.mesh.position.set(pos.x,pos.y,pos.z);
		ourEngine.scene.add(this.mesh);
	}
	//
//-----------------------------------------------------------METHODS:

	Tear.prototype = {

		update : function(){
			var toAdd = new THREE.Vector3(0,-this.speed,0);
			this.mesh.rotation.y += Math.random() * MAX_TEAR_ROTATION;
			this.mesh.position.addVectors(this.mesh.position,toAdd);

			if (this.mesh.position.y < -18) { this.mesh.position.y = 18; }

		}
	}
	TearObj = Tear;
})();