var GameModel; //will be assigned constructor

(function(){
//-------------------------------------------------------CONSTANTS/FIELDS:
	
	var MAX_TEARS = 2000;
	var CHEW_DURATION = 4;

//-----------------------------------------------------------CONSTRUCTORS:

	function Model() {

		this.self = this;
	  	this.particleSystem = new ParticleSystem();
	  	this.currentTime = 0;
		this.gameOver = false;

	}

//----------------------------------------------------------------METHODS:

	Model.prototype = {

		createTear : function(){
			var randomPositionX =  -1 + (Math.random() * 2);
			var randomPositionY =  -1 + (Math.random() * 2);
			this.tears.push(new TearObj(vec3.fromValues(randomPositionX,
										 randomPositionY,
										 0)));
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
			this.tears.splice(index,1);
		},
		updateTime : function(){
			this.currentTime += .002;
		},
		step : function(time){
			this.updateTime();
			this.particleSystem.update(this.currentTime);
			/*
			this.moveTears();
			this.checkForCollisions();
			this.thelma.framesToChew--;
	 		this.createTears();
			drawScene(self); 
			*/ 
		}
	}
	GameModel = Model;
})();

