var ThelmaObj; //will be assigned constructor

(function(){

//-------------------------------------------------------CONSTANTS/FIELDS:

	var MOVE_DIST = 0.1; 

	var LEFT = 37;
	var UP = 38;
	var RIGHT = 39;
	var DOWN = 40;

	var framesToChew;

//-----------------------------------------------------------CONSTRUCTORS:

	function Thelma(){

		this.eating = null;
		this.framesToChew = 0;


		// var plane = BABYLON.Mesh.CreatePlane("plane", 1.8, globals.scene);
		// var jawMat = new BABYLON.StandardMaterial('jaw', globals.scene);
		// jawMat.diffuseTexture = new BABYLON.Texture('jaw.png', globals.scene);
		// plane.material = jawMat;

	 //    plane.rotation.x = Math.PI / 2;	 //TODO avoid!
		// plane.material.specularColor = new BABYLON.Color3(0, 0, 0);	
		

	}

//----------------------------------------------------------------METHODS:

	Thelma.prototype = {

		// move : function(key){
		// 	switch(key){
		// 		case UP :
		// 		vec3.add(this.position,
		// 				 this.position,
		// 				 vec3.fromValues(0, MOVE_DIST, 0));
		// 		break;

		// 		case DOWN :
		// 		vec3.add(this.position,
		// 				 this.position,
		// 				 vec3.fromValues(0, -MOVE_DIST, 0));
		// 		break;

		// 		case LEFT :
		// 		vec3.add(this.position,
		// 				 this.position,
		// 				 vec3.fromValues(-MOVE_DIST, 0, 0));
		// 		break;

		// 		case RIGHT:
		// 		vec3.add(this.position,
		// 				 this.position,
		// 				 vec3.fromValues(MOVE_DIST, 0, 0));
		// 		break;
		// 	}
		// }
	}
	ThelmaObj = Thelma;
})();