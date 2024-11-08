!function (A, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.NoSleep = e() : A.NoSleep = e() }("undefined" != typeof self ? self : this, function () { return function (A) { function e(B) { if (o[B]) return o[B].exports; var Q = o[B] = { i: B, l: !1, exports: {} }; return A[B].call(Q.exports, Q, Q.exports, e), Q.l = !0, Q.exports } var o = {}; return e.m = A, e.c = o, e.d = function (A, o, B) { e.o(A, o) || Object.defineProperty(A, o, { configurable: !1, enumerable: !0, get: B }) }, e.n = function (A) { var o = A && A.__esModule ? function () { return A.default } : function () { return A }; return e.d(o, "a", o), o }, e.o = function (A, e) { return Object.prototype.hasOwnProperty.call(A, e) }, e.p = "", e(e.s = 0) }([function (A, e, o) { "use strict"; function B(A, e) { if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function") } var Q = function () { function A(A, e) { for (var o = 0; o < e.length; o++) { var B = e[o]; B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(A, B.key, B) } } return function (e, o, B) { return o && A(e.prototype, o), B && A(e, B), e } }(), t = o(1), n = t.webm, c = t.mp4, E = "undefined" != typeof navigator && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream, l = function () { function A() { var e = this; B(this, A), E ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("muted", ""), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", n), this._addSourceToVideo(this.noSleepVideo, "mp4", c), this.noSleepVideo.addEventListener("loadedmetadata", function () { e.noSleepVideo.duration <= 1 ? e.noSleepVideo.setAttribute("loop", "") : e.noSleepVideo.addEventListener("timeupdate", function () { e.noSleepVideo.currentTime > .5 && (e.noSleepVideo.currentTime = Math.random()) }) })) } return Q(A, [{ key: "_addSourceToVideo", value: function (A, e, o) { var B = document.createElement("source"); B.src = o, B.type = "video/" + e, A.appendChild(B) } }, { key: "enable", value: function () { E ? (this.disable(), console.warn("\n        NoSleep enabled for older iOS devices. This can interrupt\n        active or long-running network requests from completing successfully.\n        See https://github.com/richtr/NoSleep.js/issues/15 for more details.\n      "), this.noSleepTimer = window.setInterval(function () { document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0)) }, 15e3)) : this.noSleepVideo.play() } }, { key: "disable", value: function () { E ? this.noSleepTimer && (console.warn("\n          NoSleep now disabled for older iOS devices.\n        "), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause() } }]), A }(); A.exports = l }, function (A, e, o) { "use strict"; A.exports = { webm: "data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=", mp4: "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQAD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" } }]) });
var isPC = false;
var isMobile = false;
//initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
} else {
    isPC = true;
}

var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function () { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false }); };
var camera, camera2;
var run = false;
var back = false;
var left = false;
var right = false;

var moveController;
var timer = 0;

var createScene = async function () {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0.93, 0.93, 0.93);

    const lights = {};
    const env = {};
    const shadows = {};

    if (isMobile) {
        camera = new BABYLON.FreeCamera("DeviceCamera", new BABYLON.Vector3(-45, -6, 0.1), scene);
        camera.setTarget(new BABYLON.Vector3(-2.5, 8, 0));
        camera.inertia *= 0.95;
        camera.ellipsoid = new BABYLON.Vector3(1, 4, 1);
        camera.speed = 2;
        camera.attachControl(canvas, true);
        camera.invertRotation = true;
        // console.log("mobile");
        scene.activeCamera = camera;
    }
    else {
        camera2 = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(-45, -6, 0.1), scene);
        camera2.setTarget(new BABYLON.Vector3(-2.5, 8, 0));
        camera2.attachControl(canvas, true);
        camera2.inertia *= 0.95;
        camera2.ellipsoid = new BABYLON.Vector3(1, 4, 1);
        camera2.speed = 1;
        camera2.invertRotation = false;
        camera2.detachControl(canvas);

        camera2.keysUp = [87]; // W
        camera2.keysDown = [83]; // S
        camera2.keysLeft = [65]; // Q
        camera2.keysRight = [68]; // D
        // console.log("NotMobile");
        scene.activeCamera = camera2;
    }

    env.lighting = BABYLON.CubeTexture.CreateFromPrefilteredData("https://patrickryanms.github.io/BabylonJStextures/Demos/sodaBottle/assets/env/hamburg_hbf.env", scene);
    env.lighting.name = "hamburg_hbf";
    env.lighting.gammaSpace = false;
    env.lighting.rotationY = BABYLON.Tools.ToRadians(0);
    env.lighting.environmentIntensity = 0.25;
    scene.environmentTexture = env.lighting;

    env.skybox = BABYLON.MeshBuilder.CreateSphere("Dome", { slice: 1, diameter: 1024 }, scene);
    env.skyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene);
    env.skyboxMaterial.backFaceCulling = false;
    env.skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("https://patrickryanms.github.io/BabylonJStextures/Demos/sodaBottle/assets/skybox/hamburg", scene);
    env.skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    env.skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    env.skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    env.skyboxMaterial.microSurface = 0.35;
    env.skybox.visibility = 0.25;
    env.skybox.material = env.skyboxMaterial;

    var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -1,0), scene);
       light.position = new BABYLON.Vector3(20, 30, -20);
   
       // Default intensity is 1. Let's dim the light a small amount
       light.intensity =0;
   
       var shadowGenerator = new BABYLON.ShadowGenerator(1024,light);
       shadowGenerator.useBlurExponentialShadowMap = true;
       shadowGenerator.useKernelBlur = true;
       shadowGenerator.blurKernel = 12;
       shadowGenerator.blurScale = 2;
       shadowGenerator.setDarkness(0.95);
   
       var myGround = BABYLON.MeshBuilder.CreateGround("Ground", { width: 300, height: 200, subdivisions: 8 }, scene);
       myGround.position = new BABYLON.Vector3(-6.2, -11.6, 0);
       myGround.visibility = true;
       myGround.receiveShadows = true
       myGround.checkCollisions = true;
   
       var myGroundShadow = BABYLON.MeshBuilder.CreateGround("Ground", { width: 300, height: 200, subdivisions: 8 }, scene);
       myGroundShadow.position = new BABYLON.Vector3(-6.2, -11.59, 0);
       myGroundShadow.material = new BABYLON.ShadowOnlyMaterial('mat', scene)
       myGroundShadow.material.environmentIntensity = 0.35;
       myGroundShadow.receiveShadows = true
       myGroundShadow.visibility = 0.5;
   
   
       var mirrorMaterial = new BABYLON.PBRMaterial("texture4", scene);
       mirrorMaterial.reflectionTexture = new BABYLON.MirrorTexture("mirror", 512, scene, true);

       mirrorMaterial.reflectionTexture.clearColor = hexToRgb("#fff4d2");
       mirrorMaterial.reflectionTexture.level = 2;
       mirrorMaterial.reflectionTexture.samples = 8;
       mirrorMaterial.reflectionTexture.blurKernel = 32;
       mirrorMaterial.environmentIntensity = 0.35;
       myGround.material = mirrorMaterial;



    let isLocked = false;
    scene.onPointerDown = function (evt) {


        if (rectangle.isVisible) {
            rectangle.isVisible = false;
        }
        if (isMobile) {
            // evt === 0 (left mouse click)          
            if (evt.button == 0) {
                // Shoot at camera's ray target 
                let ray = camera.getForwardRay();
                let hit = scene.pickWithRay(ray);
                let model = hit.pickedMesh;
                // Exempt ground mesh from being shot at
                if (hit.pickedMesh != null) {
                    if (model.name.includes("Image") && model != null) {
                        // Destroy target mesh
                        bottomLine.text = model.name.toString().replace('Image_', '').replace('_primitive0', '').replace('_primitive1', '').replace('_primitive2', '').replace('_primitive1', '').replace('_primitive3', '');
                        rectangleBottom.isVisible = true;
                        setTimeout(function () {
                            topLine.text = "";
                            bottomLine.text = "";
                            rectangleBottom.isVisible = false;
                        }, 3000);
                    }
                    else {
                        // console.log("Nothing");
                    }
                }
            }
        }
        else {
            if (document.pointerLockElement !== canvas) {
                // console.log("Was Already locked: ", document.pointerLockElement === canvas);

                if (!isLocked) {
                    canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock || false;

                    if (canvas.requestPointerLock) {
                        canvas.requestPointerLock();
                    }
                }
            }
            // evt === 0 (left mouse click)          
            if (evt.button == 0) {
                // Shoot at camera's ray target 
                let ray = camera2.getForwardRay();
                ray.length = 55;
                let hit = scene.pickWithRay(ray);
                let model = hit.pickedMesh;
                // console.log(hit);
                // Exempt ground mesh from being shot at
                if (hit.pickedMesh != null) {
                    if (model.name.includes("Image") && model != null) {
                        // Destroy target mesh

                        bottomLine.text = model.name.toString().replace('Image_', '').replace('_primitive0', '').replace('_primitive1', '').replace('_primitive2', '').replace('_primitive1', '').replace('_primitive3', '');
                        rectangleBottom.isVisible = true;
                        setTimeout(function () {
                            topLine.text = "";
                            bottomLine.text = "";
                            rectangleBottom.isVisible = false;
                        }, 3000);
                    }
                    else {
                        // console.log("Nothing");
                    }
                }
            }

            // Event listener when the pointerlock is updated (or removed by pressing ESC for example).
            var pointerlockchange = function () {
                var controlEnabled = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement || false;

                // If the user is already locked
                if (!controlEnabled) {
                    camera2.detachControl(canvas);
                    isLocked = false;

                } else {
                    camera2.attachControl(canvas);
                    isLocked = true;
                    this.active = true;
                }
            };
            // Attach events to the document
            document.addEventListener("pointerlockchange", pointerlockchange, false);
            document.addEventListener("mspointerlockchange", pointerlockchange, false);
            document.addEventListener("mozpointerlockchange", pointerlockchange, false);
            document.addEventListener("webkitpointerlockchange", pointerlockchange, false);
        }
    }

    const [topLine, bottomLine, progressBar, rectangleBottom] = createUI();

    BABYLON.SceneLoader.OnPluginActivatedObservable.addOnce(function (loader) {
        loader.onCompleteObservable.add(function () {
            bottomLine.text = "Loading Complete";
            for (var i = 0; i < scene.meshes.length; i++) {
                if (scene.meshes[i].name.includes("Plane") || scene.meshes[i].name.includes("GLASS")|| scene.meshes[i].name.includes("Cube") || scene.meshes[i].name.includes("Cylinder") || scene.meshes[i].name.includes("WALL")) {
                    // shadowGenerator.getShadowMap().renderList.push(scene.meshes[i])
                    // shadowGenerator.addShadowCaster(scene.meshes[i]);
                    scene.meshes[i].receiveShadows = true;
                    scene.meshes[i].checkCollisions = true;
                    scene.meshes[i].material.environmentIntensity = 0.45;
                    //mirrorMaterial.reflectionTexture.renderList.push(scene.meshes[i]);
                    //if (scene.meshes[i].material.name.toString() == "Ground") {
                   //     scene.meshes[i].material = mirrorMaterial;
                    //}

                    shadowGenerator.getShadowMap().renderList.push(scene.meshes[i]);
                    
                }
                if (scene.meshes[i].name.includes("GLASS")) {
                    scene.meshes[i].material.environmentIntensity = 0.25;
                    scene.meshes[i].material.roughness = 0.35;
                    scene.meshes[i].material.indexOfRefraction = 0.5;
                    if(scene.meshes[i].material.name.toString() == "Material.003"){
                        scene.meshes[i].material.environmentIntensity = 0.3;
                    }
                }
               

            }
            setTimeout(function () {
                topLine.text = "";
                bottomLine.text = "Light and Shadows Updated";
                console.log(bottomLine.text);
            }, 2000);
            setTimeout(function () {
                topLine.text = "";
                bottomLine.text = "";
                rectangleBottom.isVisible = false;
            }, 4000);
        });
    });


    BABYLON.SceneLoader.AppendAsync("/3DFiles/", "NewOffice.glb",
        scene,
        function (meshes) {
            if (meshes.lengthComputable) {
                bottomLine.text = "Loading, please wait..." + (meshes.loaded * 100 / meshes.total).toFixed() + "%";
                console.log(bottomLine.text);
            }
            else {
                var dlCount = meshes.loaded / (1024 * 1024);
                bottomLine.text = "Loading, please wait..." + Math.floor(dlCount * 100.0) / 100.0 + " MB already loaded.";
                console.log(bottomLine.text);
            }

    });

    scene.gravity = new BABYLON.Vector3(0, -0.9, 0);

    scene.collisionsEnabled = true;

    if (isMobile) {
        camera.applyGravity = true;
        camera._needMoveForGravity = true;
        camera.checkCollisions = true;
        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        var button2 = BABYLON.GUI.Button.CreateSimpleButton("but2", "Walking");
        button2.width = "220px"
        button2.height = "120px";
        button2.color = "Black";
        button2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        button2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        button2.top = "-150px";
        button2.cornerRadius = 5;
        button2.background = "white";
        button2.alpha = 0.75;
        button2.onPointerDownObservable.add(function () {
            run = true;
        });
        button2.onPointerUpObservable.add(function () {
            run = false;
        });
        advancedTexture.addControl(button2);
    }
    else {
        camera2.applyGravity = true;
        camera2._needMoveForGravity = true;
        camera2.checkCollisions = true;
    }

    myGround.checkCollisions = true;

    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var circle = new BABYLON.GUI.Ellipse("circle");
    circle.width = "20px";
    circle.height = "20px";
    circle.color = "white";
    circle.thickness = 3;
    advancedTexture.addControl(circle);
    circle.isVisible = true;

    var rectangle = new BABYLON.GUI.Rectangle("rect");
    rectangle.background = "gray";
    rectangle.width = "55%";
    rectangle.height = "500px";
    rectangle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    rectangle.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    rectangle.alpha = 0.75;
    rectangle.outlineWidth = 0;
    rectangle.cornerRadius = 5;
    advancedTexture.addControl(rectangle);

    // textblock.text = " \n \n In Walking Mode: \n Use WASD for WALK \n Use Shift to SPRINT \n Walk over or left click to collect the Pages";


    var tb = new MixedTextBlock();
    tb.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    tb.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

    if (isMobile) {
        tb.multiTextArgs = [
            { text: "\n Welcome to the Gallery", fillStyle: "white", font: "bold 35px Helvetica" },
            { text: `\n \n \n !!! Work Still in Progress !!!`, fillStyle: "yellow", font: "bold 25px Helvetica" },
            { text: "\n \n Use the Touch-Screen to Look-around in the Scene", fillStyle: "white", font: "bold 25px Helvetica" },
            { text: "\n \n Use the Walk Button to walk in the direction your Looking", fillStyle: "white", font: "bold 35px Helvetica" },
            { text: "\n \n Click on the Artworks to get Information \n", fillStyle: "white", font: "bold 25px Helvetica" },
            { text: "\n \n by player11en \n", fillStyle: "white", font: "bold 15px Helvetica" }
        ];
    }
    else {
        tb.multiTextArgs = [
            { text: "\n Welcome to the Gallery", fillStyle: "white", font: "bold 45px Helvetica" },
            { text: `\n \n \n !!! Work Still in Progress !!!`, fillStyle: "yellow", font: "bold 25px Helvetica" },
            { text: `\n \n  In Walking Mode:`, fillStyle: "white", font: "bold 35px Helvetica" },
            { text: "\n \n Use WASD for WALK \n \n Use Shift to Sprint \n", fillStyle: "white", font: "bold 25px Helvetica" },
            { text: "\n Green Bar shows Sprinting-Energy", fillStyle: "white", font: "bold 15px Helvetica" },
            { text: "\n \n Click on the Artworks to get Information", fillStyle: "white", font: "bold 25px Helvetica" },
            { text: "\n \n by player11en \n", fillStyle: "white", font: "bold 15px Helvetica" }
        ];
    }
    tb.text = "hi"
    rectangle.addControl(tb);

    var energy = 50, shiftPressed = false;
    scene.onBeforeRenderObservable.add(function () {
        if (isMobile) {
            var cameraForwardRayPosition = camera.getForwardRay().direction;
            let ray = camera.getForwardRay();
            ray.length = 300;
            let hit = scene.pickWithRay(ray);
            if (run == true && hit.distance >= 10) {

                //camera2.position.z-=0.1
                var v2 = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0, 0, 2), BABYLON.Matrix.RotationY(camera.rotation.y));
                camera.position.addInPlace(v2);
                // camera2.checkCollisions = true;
                // camera2.position = direction+ 0.1;sss
            }
        }
        else {
            var cameraForwardRayPosition = camera2.getForwardRay().direction;
            if (run == true) {
                //camera2.position.z-=0.1
                var v2 = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0, 0, 0.1), BABYLON.Matrix.RotationY(camera2.rotation.y));
                camera2.position.addInPlace(v2);
                // camera2.checkCollisions = true;
                // camera2.position = direction+ 0.1;
            }
            if (back == true) {
                // camera2.position.z+=0.1

                var v2 = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0, 0, -0.1), BABYLON.Matrix.RotationY(camera2.rotation.y));
                camera2.position.addInPlace(v2);

            }
            if (left == true) {
                var v2 = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(-0.1, 0, 0), BABYLON.Matrix.RotationY(camera2.rotation.y));
                camera2.position.addInPlace(v2);
            }
            if (right == true) {
                // camera2.position.x-=0.1
                var v2 = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0.1, 0, 0), BABYLON.Matrix.RotationY(camera2.rotation.y));
                camera2.position.addInPlace(v2);
            }

            if (shiftPressed) {
                if (energy > 0) {
                    camera2.speed = 2;
                    energy--;
                    progressBar.width = energy / 1 / 100;
                }
                else {
                    camera2.speed = 1;
                    if (energy < 50 && !shiftPressed) {
                        energy += 0.5;
                        progressBar.width = energy / 1 / 100;
                    }
                }
            } else {
                camera2.speed = 1;
                if (energy < 50) {
                    energy += 0.5;
                    progressBar.width = energy / 1 / 100;
                }
            }
        }
    });

    scene.onKeyboardObservable.add((kbInfo) => {
        switch (kbInfo.type) {
            case BABYLON.KeyboardEventTypes.KEYDOWN:
                switch (kbInfo.event.key) {
                    case "Shift":
                        shiftPressed = true;
                        break;
                }
                break;

            case BABYLON.KeyboardEventTypes.KEYUP:
                switch (kbInfo.event.key) {
                    case "Shift":
                        shiftPressed = false;
                        break;
                }
        }
    });
    return scene;
};

function hexToRgb(hex) {
    // Remove the '#' if present
    hex = hex.replace(/^#/, '');
    // Parse the r, g, b values
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return new BABYLON.Color3(r / 255, g / 255, b / 255);
}

function createUI() {
    // Create full screen UI.
    const uiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    // Create attribution line of text.
    const attributionLine = new BABYLON.GUI.TextBlock();
    attributionLine.color = "lightgray";
    attributionLine.fontSize = 12;
    attributionLine.top = "-45%";
    attributionLine.text = "Asset created by player11en";
    uiTexture.addControl(attributionLine);

    // Create top line of text.
    const topLine = new BABYLON.GUI.TextBlock();
    topLine.color = "white";
    topLine.fontSize = 24;
    topLine.top = "-38%";
    uiTexture.addControl(topLine);

    const rectangleBottom = new BABYLON.GUI.Rectangle();
    rectangleBottom.background = "gray";
    rectangleBottom.width = "35%";
    rectangleBottom.height = "100px";
    rectangleBottom.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    rectangleBottom.alpha = 0.35;
    rectangleBottom.top = "45%";
    rectangleBottom.outlineWidth = 0;
    rectangleBottom.cornerRadius = 5;
    uiTexture.addControl(rectangleBottom);

    // Create bottom line of text.
    const bottomLine = new BABYLON.GUI.TextBlock();
    bottomLine.color = "white";
    bottomLine.fontSize = 24;
    bottomLine.top = "45%";
    uiTexture.addControl(bottomLine);

    const progressBar = new BABYLON.GUI.Rectangle();
    progressBar.width = 0.5;
    progressBar.height = "15px";
    progressBar.outlineWidth = "2px";
    progressBar.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    progressBar.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    progressBar.top = "10px";
    progressBar.left = "5px";
    if (isMobile) {
        progressBar.isVisible = false;
    } else {
        progressBar.isVisible = true;
    }
    progressBar.background = BABYLON.Color3.FromHexString("#D3D3D3").toHexString();
    uiTexture.addControl(progressBar);

    return [topLine, bottomLine, progressBar, rectangleBottom];
}

window.initFunction = async function () {
    var asyncEngineCreation = async function () {
        try {
            return createDefaultEngine();
        } catch (e) {
            console.log("the available createEngine function failed. Creating the default engine instead");
            return createDefaultEngine();
        }
    }

    window.engine = await asyncEngineCreation();
    if (!engine) throw 'engine should not be null.';
    startRenderLoop(engine, canvas);
    window.scene = createScene();
};
initFunction().then(() => {
    scene.then(returnedScene => { sceneToRender = returnedScene; });

});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MixedTextBlock = /** @class */ (function (_super) {
    __extends(MixedTextBlock, _super);
    function MixedTextBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MixedTextBlock.prototype, "multiTextArgs", {
        set: function (value) {
            this._multiTextArgs = value;
        },
        enumerable: false,
        configurable: true
    });
    MixedTextBlock.prototype._drawText = function (text, textWidth, y, context) {
        var width = this._currentMeasure.width;
        var x = 0;
        switch (this._textHorizontalAlignment) {
            case BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT:
                x = 10;
                break;
            case BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT:
                x = width - textWidth;
                break;
            case BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER:
                x = (width - textWidth) / 2;
                break;
        }
        if (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) {
            context.shadowColor = this.shadowColor;
            context.shadowBlur = this.shadowBlur;
            context.shadowOffsetX = this.shadowOffsetX;
            context.shadowOffsetY = this.shadowOffsetY;
        }
        if (this.outlineWidth) {
            context.strokeText(text, this._currentMeasure.left + x, y);
        }
        var Y = y - this._fontOffset.height
        try {
            Y = Y + parseInt(this._multiTextArgs[0].font.split(" ")[1].replace("px", ""))
        }
        catch (e) {
            Y = this._fontOffset.height
        }
        this._fillMixedText(context, this._multiTextArgs, this._currentMeasure.left + x, Y);
    };
    MixedTextBlock.prototype._fillMixedText = function (context, args, x, y) {
        var defaultFillStyle = context.fillStyle;
        var defaultFont = context.font;
        var defaultOffset = this._fontOffset.height
        var lineStart = x
        var lineBreak = this._currentMeasure.top
        var windowWidth = this._currentMeasure.width - 30
        context.save();
        args.forEach(function (_a) {
            var text = _a.text, fillStyle = _a.fillStyle, font = _a.font;
            var splittedText = text.split(" ")
            var height = 0
            try {
                height = parseInt(_a.font.split(" ")[1].replace("px", ""))
            }
            catch (e) {
                height = defaultOffset
            }
            context.fillStyle = fillStyle || defaultFillStyle;
            context.font = font || defaultFont;
            splittedText.forEach(function (word) {
                var finalText = word.split("\n")
                if (finalText.length > 1) {
                    for (var i = 0; i < finalText.length; i++) {
                        finalText[i] = " " + finalText[i]
                        if (x - lineStart + context.measureText(finalText[i]).width > windowWidth) {
                            x = lineStart
                            y += height
                            finalText[i] = finalText[i].replace(" ", "")
                        }
                        if (x == lineStart)
                            finalText[i] = finalText[i].replace(" ", "")
                        context.fillText(finalText[i], x, y);
                        x += context.measureText(finalText[i]).width;
                        if (i != finalText.length - 1) {
                            y += height
                            x = lineStart
                        }
                    }
                }
                else {
                    word = " " + word
                    if (x - lineStart + context.measureText(word).width > windowWidth) {
                        x = lineStart
                        y += height
                        word = word.replace(" ", "")
                    }
                    if (x == lineStart)
                        word = word.replace(" ", "")
                    context.fillText(word, x, y);
                    x += context.measureText(word).width;
                }
            })

        });
        context.restore();
    };
    return MixedTextBlock;
}(BABYLON.GUI.TextBlock));