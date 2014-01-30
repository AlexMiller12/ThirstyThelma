var ParticleSystem = [];

(function(){

//--------------------------------------------------CONSTANTS/FIELDS:

	

//------------------------------------------------------CONSTRUCTORS:

	function particleSystem(maxVelocity){
		this.Max_Particles = 500000;
		this.particles = [];
		this.maxVelocity = 5;
		this.minVelocity = 1;
		this.init();
	    
	}
	
//-----------------------------------------------------------METHODS:

	particleSystem.prototype = {
		 getStartingVelocity : function(maxVelocity){
		    var theta = Math.random() * 2 * Math.PI;
		    var phi = Math.random() * Math.PI / 4 + (Math.PI / 4);
		    var x = maxVelocity * Math.cos(phi)*Math.cos(theta);
		    var y = maxVelocity * Math.sin(phi);
		    var z = maxVelocity * Math.cos(phi)*Math.sin(theta);
		    return vec3.fromValues(x,y,z);
		},

		init : function(){
			var i, il;
	    	for(i = 0, il = this.Max_Particles; i < il; i++){
	       		var random = this.getStartingVelocity(this.minVelocity + Math.random() * this.maxVelocity);
	       		 this.particles.push(new Particle(random));
	       	}
	    },
	
		update : function(time){
			var i, il;
			for(i = 0, il = this.Max_Particles; i < il; i++){
				this.particles[i].update();
			}
		}

	}

	ParticleSystem = particleSystem;
})();