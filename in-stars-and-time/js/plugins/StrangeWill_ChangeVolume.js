
(function(configManager, storageManager, input) {
    const configFileExists = storageManager.exists(-1);
    if(!configFileExists) {
        configManager.bgmVolume = 50;
        configManager.bgsVolume = 50;
        //configManager.meVolume = 20;
        //configManager.seVolume = 20;
        configManager.masterVolume = 50;
        configManager.alwaysDash = true;
        //configManager.keyMapper = JSON.parse(JSON.stringify(configManager.wasdMap));      
        //input.keyMapper = configManager.keyMapper;
        configManager.save();
    }
})(ConfigManager, StorageManager, Input);

