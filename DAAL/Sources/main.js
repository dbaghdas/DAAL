// Set our Default Screen Size
const screenWidth = 1920;
const screenHeight = 1080;

let config= {
    type: Phaser.AUTO,
    width: screenWidth,
    height: screenHeight,  
    
    // Aspect Ratio of 16:9 (1920x1080)
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }, 
    scene: [Play]
}

// Define our game
let game = new Phaser.Game(config);
