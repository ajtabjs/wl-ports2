window.onload = function() {
    PluginManager.setup($plugins);
    SceneManager.run(Scene_Boot);
    setTimeout(() => {
        window.fullSetupComplete = true;
    }, 2500);
};
