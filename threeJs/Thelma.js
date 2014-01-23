var ThelmaObj; //will be assigned constructor

(function(){

//-------------------------------------------------------CONSTANTS/FIELDS:

	var MOVE_DIST = 1; 

	var LEFT = 37;
	var UP = 38;
	var RIGHT = 39;
	var DOWN = 40;

	var framesToChew;

//-----------------------------------------------------------CONSTRUCTORS:

	function Thelma(){
	
		this.eating = null;
		this.framesToChew = 0;

		var headGeo = new THREE.PlaneGeometry(1.8,1.8,1,1);
		var headTexture = THREE.ImageUtils.loadTexture("head.png");
		var headMaterial = new THREE.MeshBasicMaterial({map: headTexture, transparent: true});
        this.headMesh = new THREE.Mesh(headGeo, headMaterial);

        var jawGeo = new THREE.PlaneGeometry(1.8,1.8,1,1);
		var jawTexture = THREE.ImageUtils.loadTexture("jaw.png");
		var jawMaterial = new THREE.MeshBasicMaterial({map: jawTexture, transparent: true});
		this.mesh = new THREE.Mesh(jawGeo, jawMaterial);
		this.mesh.add(this.headMesh);

		ourEngine.scene.add(this.mesh);
	}

//----------------------------------------------------------------METHODS:

	Thelma.prototype = {

		move : function(key){
			var reciever = new THREE.Vector3(0,0,0);
			var toAdd = [];
			switch(key){
				case UP :
					toAdd = new THREE.Vector3(0,MOVE_DIST,0);
					break;
				
				case DOWN :
					toAdd = new THREE.Vector3(0,-MOVE_DIST,0);
					break;

				case LEFT :
					toAdd = new THREE.Vector3(-MOVE_DIST,0,0);
					break;

				case RIGHT : 
					toAdd = new THREE.Vector3(MOVE_DIST,0,0);
					break;
				default :
					return;
			}
				this.mesh.position.addVectors(this.mesh.position,toAdd);
		}
	}
	ThelmaObj = Thelma;
})();