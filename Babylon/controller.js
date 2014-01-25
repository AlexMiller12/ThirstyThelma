var globals = [];

var init = function() {
    // Get the Canvas element from our HTML doc
    var canvas = document.getElementById("renderCanvas");
    // Load BABYLON 3D engine and set the root directory
    var engine = new BABYLON.Engine(canvas, true);
    //Create a new scene with a camera (mandatory), a light (better) and a sphere (to see the origin)
    globals.scene = new BABYLON.Scene(engine);
    // Creating a camera looking to the zero point (0,0,0)
    // var camera = new BABYLON.ArcRotateCamera("Camera", 
    //                                          0, 0, 10, 
    //                                          new BABYLON.Vector3(0, 0, 0),
    //                                          globals.scene);

    var camPosition = new BABYLON.Vector3(0, 0, 10);

    var camera = new BABYLON.Camera("Camera", camPosition, globals.scene);
    camera.upVector = new BABYLON.Vector3(0, 0, 1);
    camera.target = new BABYLON.Vector3(0, 0, 0);
    // Attach the camera to the scene
    globals.scene.activeCamera.attachControl(canvas);
    // Creating a omnidirectional light (you must create at least one light)
    var light = new BABYLON.DirectionalLight('dirlight', 
                                             new BABYLON.Vector3(0, -10, 0), 
                                             globals.scene);
    // Create model!
    // globals.modelInstance = new GameModel();
 
    //----SANDBOX
    
    var plane = BABYLON.Mesh.CreatePlane('plane', 1.8, globals.scene);    
    // var plane = BABYLON.Mesh.CreateSphere('sphere', 10, 1, globals.scene);    
    plane.rotation.x = 0.5 * Math.PI / 2;  //TODO avoid!
    // plane.rotation.y = 0.5 * Math.PI / 2;  //TODO avoid!    

    var jawMat = new BABYLON.StandardMaterial('jaw', globals.scene);
    jawMat.diffuseTexture = new BABYLON.Texture('head.png', globals.scene);
    plane.material = jawMat;
    //Planes must have a specular color for texture 
    plane.material.specularColor = new BABYLON.Color3(0,0,0);
    // plane.receiveShadows = true;
    // jawMat.diffuseTexture.hasAlpha = true;
    // jawMat.diffuseTexture = new BABYLON.Texture('jaw.png', globals.scene);
    // plane.material = jawMat;

    // plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    // // allow mesh to receive shadows
    // plane.receiveShadows = false;
    //----


    // Once the scene is loaded, just register a render loop to render it
    engine.runRenderLoop(function () {

        globals.scene.render();
    });
}

// window.onkeydown = function(e) {

//     var key = e.keyCode ? e.keyCode : e.which;

//     modelInstance.moveThelma(key);
// }

init();


// init, initCamera, initShaders, initWindow, update, onkeydown

// if (BABYLON.Engine.isSupported()) {
//             var canvas = document.getElementById("renderCanvas");
//             var engine = new BABYLON.Engine(canvas, true);

//             var scene = new BABYLON.Scene(engine);

//             var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 0, -10), scene);
//             var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 100, 100), scene);
//             var sphere = BABYLON.Mesh.CreateSphere("Sphere", 16, 3, scene);
            
//             // Material
//             var material = new BABYLON.StandardMaterial("default", scene);
//             material.diffuseTexture = new BABYLON.Texture("head.png", scene);
//             material.diffuseTexture.hasAlpha = true;
//             material.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
//             material.backFaceCulling = false;
//             sphere.material = material;

//             // Render loop
//             var renderLoop = function () {
//                 // Start new frame
//                 engine.beginFrame();

//                 scene.render();

//                 // Present
//                 engine.endFrame();

//                 // Register new frame
//                 BABYLON.Tools.QueueNewFrame(renderLoop);
//             };

//             BABYLON.Tools.QueueNewFrame(renderLoop);

//             var alpha = 0;
//             sphere.scaling.x = 0.5;
//             sphere.scaling.z = 1.5;
//             scene.beforeRender = function() {
//                 sphere.rotation.x = alpha;
//                 sphere.rotation.y = alpha;

//                 alpha += 0.01;
//             };
//         }