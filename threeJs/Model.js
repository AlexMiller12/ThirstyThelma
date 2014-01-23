var GameModel; //will be assigned constructor

(function(){
//-------------------------------------------------------CONSTANTS/FIELDS:
	
	var MAX_TEARS = 3000;
	var CHEW_DURATION = 4;
	var WINDOW_SPAN_X = 0.5 * window.innderWidth;
	var WINDOW_SPAN_Y = 0.5 * window.innderHeight;	

//-----------------------------------------------------------CONSTRUCTORS:

	function Model() {

		this.self = this;
	  	this.score = 0;
		this.tears = [];
		this.numTears = 0;
		this.tearDimension = vec3.fromValues(0.026,0.026,0.026);
		this.eatTimer = 0;
		this.thelma = new ThelmaObj();
		this.thelmaDimension = vec3.fromValues(0.18,0.18,0.18);
		this.gameOver = false;

	}

//----------------------------------------------------------------METHODS:

	Model.prototype = {

		checkForCollisions : function(){

			var i;
			for(i = 0; i < this.numTears; i++){
				var curTear = this.tears[i];
				var dist = curTear.mesh.position.distanceTo(this.thelma.mesh.position);
				if ( dist < (1.8 * 0.7)){
					this.removeTear(i);
					this.thelma.framesToChew = CHEW_DURATION;
				}   
			}
		},

		createTear : function(){
			var randX = ((Math.random() -0.5) * 12);
			var randY = ((Math.random() -0.5) * 12);			
			this.tears.push(new TearObj(new THREE.Vector3(randX, randY, 0)));
			this.numTears++;
		},

		createTears : function(){
			if(this.numTears < MAX_TEARS) {
				if(Math.random() > 0.1) {
					this.createTear();
				}
			}
		},

		moveThelma : function(key){
			this.thelma.move(key);
		},

		moveTears : function() {
			var i;
			for(i = 0; i < this.numTears; i++){

				this.tears[i].update();
			}
		},

		removeTear : function(index){

			this.numTears--;
			ourEngine.scene.remove(this.tears[index].mesh);
			this.tears.splice(index,1);
		},

		step : function(){
			
			this.moveTears();
			this.checkForCollisions();
			this.thelma.headMesh.position.y = (0.2 * this.thelma.framesToChew);
			this.thelma.framesToChew--;
			if(this.thelma.framesToChew < 0) this.thelma.framesToChew = 0;
	 		this.createTears();
			
		}
	}
	GameModel = Model;
})();

