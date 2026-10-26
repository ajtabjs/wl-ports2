      const CHANGE_ASPECT_RATIO = true;

      var statusElement = document.getElementById("status");
      var progressElement = document.getElementById("progress");
      var spinnerElement = document.getElementById("spinner");
      var canvasElement = document.getElementById("canvas");

      var startingHeight, startingWidth;
      var startingAspect;
      var Module = {
        preRun: [],
        postRun: [],
        print: (function () {
          var element = document.getElementById("output");
          if (element) element.value = ""; // clear browser cache
          return function (text) {
            if (arguments.length > 1)
              text = Array.prototype.slice.call(arguments).join(" ");
            // These replacements are necessary if you render to raw HTML
            //text = text.replace(/&/g, "&amp;");
            //text = text.replace(/</g, "&lt;");
            //text = text.replace(/>/g, "&gt;");
            //text = text.replace('\n', '<br>', 'g');
            console.log(text);
            if (text === "Entering main loop.") {
              // It seems that this text ensures game is loaded.
              ensureAspectRatio();
            }
            if (element) {
              element.value += text + "\n";
              element.scrollTop = element.scrollHeight; // focus on bottom
            }
          };
        })(),
        printErr: function (text) {
          if (arguments.length > 1)
            text = Array.prototype.slice.call(arguments).join(" ");
          console.error(text);
        },
        canvas: (function () {
          var canvas = document.getElementById("canvas");

          // As a default initial behavior, pop up an alert when webgl context is lost. To make your
          // application robust, you may want to override this behavior before shipping!
          // See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
          canvas.addEventListener(
            "webglcontextlost",
            function (e) {
              alert("WebGL context lost. You will need to reload the page.");
              e.preventDefault();
            },
            false
          );

          return canvas;
        })(),
        setStatus: function (text) {
          if (!Module.setStatus.last)
            Module.setStatus.last = { time: Date.now(), text: "" };
          if (text === Module.setStatus.last.text) return;
          var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
          var now = Date.now();
          if (m && now - Module.setStatus.last.time < 30) return; // if this is a progress update, skip it if too soon
          Module.setStatus.last.time = now;
          Module.setStatus.last.text = text;
          if (m) {
            text = m[1];
            progressElement.value = parseInt(m[2]) * 100;
            progressElement.max = parseInt(m[4]) * 100;
            progressElement.hidden = false;
            spinnerElement.hidden = false;
          } else {
            progressElement.value = null;
            progressElement.max = null;
            progressElement.hidden = true;

            // If there are no status text, we are finished and can display
            // the canvas and hide the spinner
            if (!text) {
              spinnerElement.style.display = "none";
              canvasElement.style.display = "block";
            }
          }
          statusElement.innerHTML = text;
        },
        totalDependencies: 0,
        monitorRunDependencies: function (left) {
          this.totalDependencies = Math.max(this.totalDependencies, left);
          Module.setStatus(
            left
              ? "Preparing... (" +
                  (this.totalDependencies - left) +
                  "/" +
                  this.totalDependencies +
                  ")"
              : "All downloads complete."
          );
        },
      };
      Module.setStatus("Downloading...");
      window.onerror = function (event) {
        // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
        Module.setStatus("Exception thrown, see JavaScript console");
        spinnerElement.style.display = "none";
        Module.setStatus = function (text) {
          if (text) Module.printErr("[post-exception status] " + text);
        };
      };

      // Route URL GET parameters to argc+argv
      if (typeof window === "object") {
        Module['arguments'] = window.location.search.substr(1).trim().split('&');
        // If no args were passed arguments = [''], in which case kill the single empty string.
        if (!Module['arguments'][0]) {
          Module['arguments'] = [];
        }
      }

      // The GX host normally supplies this optional game-data load callback.
      var g_pWadLoadCallback = undefined;
      function setWadLoadCallback(callback) {
        g_pWadLoadCallback = callback;
      }

      var g_pAddAsyncMethod = -1;

      function setAddAsyncMethod( asyncMethod )
      {
        g_pAddAsyncMethod = asyncMethod;
      }

      var g_pJSExceptionHandler = undefined;

      function setJSExceptionHandler( exceptionHandler )
      {
        if (typeof exceptionHandler == "function") {
            g_pJSExceptionHandler = exceptionHandler;
        } // end if
      } // end setJSExceptionHandler

      function hasJSExceptionHandler()
      {
        return (g_pJSExceptionHandler != undefined) && (typeof g_pJSExceptionHandler == "function");
      } // end hasJSExceptionHandler

      function doJSExceptionHandler( exceptionJSON )
      {
        if (typeof g_pJSExceptionHandler == "function") {
          var exception = JSON.parse( exceptionJSON );
          g_pJSExceptionHandler( exception );
        } // end if
      } // end doJSExceptionHandler

      function manifestFiles()
      {
        return [ "runner.data",
"runner.js",
"runner.wasm",
"audio-worklet.js",
"game.unx",
"snd_ambientpluie.ogg",
"snd_ambient_interieurclassique.ogg",
"snd_ambient_nuit.ogg",
"snd_ambient_tuyaux.ogg",
"snd_ambient_ventsifflant.ogg",
"snd_baby.ogg",
"snd_bell.ogg",
"snd_bipaigu.ogg",
"snd_bipdown.ogg",
"snd_bipup.ogg",
"snd_blip.ogg",
"snd_braker.ogg",
"snd_breathin.ogg",
"snd_breathout.ogg",
"snd_checker.ogg",
"snd_chimes.ogg",
"snd_corridorthump_left.ogg",
"snd_corridorthump_right.ogg",
"snd_corridor_breath1.ogg",
"snd_corridor_breath2.ogg",
"snd_corridor_breath3.ogg",
"snd_corridor_hello.ogg",
"snd_corridor_inspection.ogg",
"snd_crackle.ogg",
"snd_creepylaugh.ogg",
"snd_death2_1.ogg",
"snd_death2_2.ogg",
"snd_deathcoming.ogg",
"snd_dimensionaldoorentrance.ogg",
"snd_dimensionaldooropen.ogg",
"snd_distortedmusicbox.ogg",
"snd_dontmove.ogg",
"snd_doorclose.ogg",
"snd_dooropen.ogg",
"snd_dooropen2.ogg",
"snd_doorunlocking.ogg",
"snd_door_closed.ogg",
"snd_door_unlocked.ogg",
"snd_dug.ogg",
"snd_electricalbuzz.ogg",
"snd_electricalshock.ogg",
"snd_electricshock2.ogg",
"snd_entrance.ogg",
"snd_escalier_seuls.ogg",
"snd_exitfield.ogg",
"snd_extreme.ogg",
"snd_feuille.ogg",
"snd_glitch1.ogg",
"snd_glitch2.ogg",
"snd_glitch3.ogg",
"snd_gotkey.ogg",
"snd_gun.ogg",
"snd_hardcorescream.ogg",
"snd_heartbeat.ogg",
"snd_impactlow.ogg",
"snd_lightoff.ogg",
"snd_lit.ogg",
"snd_loop10_roads.ogg",
"snd_loop1_bed.ogg",
"snd_loop2_curse.ogg",
"snd_loop3_intrigue.ogg",
"snd_loop4_intriguecurse.ogg",
"snd_loop5_descent.ogg",
"snd_loop6_ethered.ogg",
"snd_loop7_distantnosalgia.ogg",
"snd_loop8_boiler.ogg",
"snd_loop9_corridor.ogg",
"snd_lowerperc.ogg",
"snd_moveagain.ogg",
"snd_ohoh.ogg",
"snd_organ.ogg",
"snd_pawn.ogg",
"snd_phonebreath.ogg",
"snd_phonehangup.ogg",
"snd_phonepickup.ogg",
"snd_phonetonality.ogg",
"snd_raddeath.ogg",
"snd_radoutcur.ogg",
"snd_reddy.ogg",
"snd_roadsfootsteps.ogg",
"snd_roadsrattle.ogg",
"snd_runnin.ogg",
"snd_rustling.ogg",
"snd_select.ogg",
"snd_select2.ogg",
"snd_shush.ogg",
"snd_siren.ogg",
"snd_squa8blocked.ogg",
"snd_squa8movement.ogg",
"snd_squa8startup.ogg",
"snd_tape1.ogg",
"snd_tape2.ogg",
"snd_tape3.ogg",
"snd_tape4.ogg",
"snd_tick.ogg",
"snd_tick2.ogg",
"snd_tick3.ogg",
"snd_tiroir_ferme.ogg",
"snd_tiroir_ouvert.ogg",
"snd_tvon.ogg" ].join( ";");
      }

      function onFirstFrameRendered()
      {
          //console.log("First frame rendered!");          
      }

      function onGameSetWindowSize(width,height)
      {
          //console.log("Game set target window size to width:" + width + ", height:" + height);
      }

    function triggerAd(adId, _callback_beforeAd, _callback_afterAd, _callback_adDismissed, _callback_adViewed, _callback_adbreakDone) {
       // need to take a copy of the RValues represented
       var pRValueCopy = triggerAdPrefix( _callback_beforeAd, _callback_afterAd, _callback_adDismissed, _callback_adViewed, _callback_adbreakDone );
       var pCallbackBeforeAd = pRValueCopy + (0*16);
       var pCallbackAfterAd = pRValueCopy + (1*16);
       var pCallbackAdDismissed = pRValueCopy + (2*16);
       var pCallbackAdViewed = pRValueCopy + (3*16);
       var pCallbackAdBreakDone = pRValueCopy + (4*16);

       adBreak({
         "type": "reward",                    // The type of this placement
         "name": adId,                        // A descriptive name for this placement

         "beforeAd": () => {                  // Prepare for the ad. Mute and pause the game flow
           console.log("beforeAd");
           // trigger _callback_beforeAd to game
           doGMLCallback( pCallbackBeforeAd, { id:adId } );
         },
         "afterAd" : () => {                   // Resume the game and re-enable sound
           console.log("afterAd");
           // trigger _callback_afterAd to game
           doGMLCallback( pCallbackAfterAd, { id:adId } );
         },
         "beforeReward": (showAdFn) => {      // Show reward prompt (call showAdFn() if clicked)
           console.log("beforeReward");
           showAdFn();
           // Setup native prompt to indicate ad will load
           // Will not be setup by dev so this UX controlled by GXC
         },
         "adDismissed": () => {               // Player dismissed the ad before it finished
           console.log("adDismissed");
           // trigger _callback_adDismissed to game
           doGMLCallback( pCallbackAdDismissed, { id:adId } );
         },
         "adViewed": () => {                  // Player watched the ad–give them the reward.
           console.log("adViewed");
           // trigger _callback_adViewed to game
           doGMLCallback( pCallbackAdViewed, { id:adId } );
         },
         "adBreakDone": (placementInfo) => {  // Always called (if provided) even if an ad didn't show
           console.log("adBreakDone");
           // trigger _callback_adBreakDone to game
           doGMLCallback( pCallbackAdBreakDone, { id:adId } );
           triggerAdPostfix( pRValueCopy );
         }, 
       });
      }

      function triggerPayment(itemId, _callback_PaymentComplete) {
        var pRValueCopy = triggerPaymentPrefix(_callback_PaymentComplete);
        setTimeout(() => {
          console.log("triggerPayment");
          doGMLCallback(pRValueCopy, { id:itemId });        
        }, 1000);
        triggerPaymentPostfix();
      }

      function ensureAspectRatio() {
        if(canvasElement===undefined) {
          return 
        } 

        canvasElement.className = canvasElement.className.includes("active")
          ? canvasElement.className
          : canvasElement.className + " active";
        if (!CHANGE_ASPECT_RATIO) {
          return;
        }

        
        /* NOTE(robertz): The default canvas sizes while loading are 300x150,
        * let us not use those values. eventually, there will most likely be a 
         * game of that dimension, so this should be removed
         */
        if (canvasElement.height === 150 && canvasElement.width === 300) {
          return;
        }
        
        if (startingHeight === undefined && startingWidth === undefined) {
          startingHeight = canvasElement.height;
          startingWidth = canvasElement.width;
          startingAspect = startingWidth / startingHeight;
        }
        
        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight;
        var newHeight, newWidth;

        // Find the limiting dimension.
        var heightQuotient = startingHeight / maxHeight;
        var widthQuotient = startingWidth / maxWidth;
        
        if (heightQuotient > widthQuotient) {          
          // Max out on height.
          newHeight = maxHeight;
          newWidth = newHeight * startingAspect;
        } else {          
          // Max out on width.
          newWidth = maxWidth;
          newHeight = newWidth / startingAspect;
        }

        canvasElement.style.height = newHeight + "px";
        canvasElement.style.width = newWidth + "px";
      
    }

      /* Observe the dimensions of body and ensureAspectRatio of the canvas (whilst taking up maximum space)
       *
       * NOTE(robertz):
       *  We also need to request an Animation Frame to do this, if we do not, resizeObserver might throw error
       *  "ResizeObserver loop limit exceeded", which means that 
       *  "[...] ResizeObserver was not able to deliver all observations within a single animation frame"
       *  https://stackoverflow.com/a/50387233 (source).
       *  
       *  There are different ways to solve the issue, since the error is benign (meaning it wont crash anything)
       *  we could choose to ignore it via changing the window.onerror method, i.e
       *  ```
       *  window.onerror((event)=> {
       *    if(event==="ResizeObserver loop limit exceeded") {
       *       return
       *    }
       *     ///...rest
       *  }
       *  ```
       *  But for now we request an animationFrame which seems to be the recommended way to go about it.
       */
      const resizeObserver = new ResizeObserver(() => window.requestAnimationFrame(ensureAspectRatio));
      resizeObserver.observe(document.body);