let cc = {
    //*** BEGIN options object: default options, can be overwritten by init call
    options : {
        canvas : {
            width : 500,
            height : 300,
            refreshRate : 20
        },
        copter : {
            width : 30,
            height : 15,
            topSpeed : 5,                   // max speed
            // how much to increase the speed by each time
            // the game refreshes and the button is held down
            acceleration : 0.15,
            img : null    // optional copter image path, relative to the html page
        },
        physics : {
            terminalVelocity : 4,           // max speed
            gravity : 0.5,
            friction : 0.8
        },
        walls : {
            separation : 19,                //fudge
            width : 20,
            step : 5,      // potential height difference for each new wall
            startHeight : 60,
            maxHeight : 120,
            // how often to increase the height of each wall (from start to max)
            heightIncreaseInterval : 5,
            // how much to increase the height of each wall by
            heightIncreaseStep : 10
        },
        obstacles : {
            separation : 250,               // frequency of obstacles
            width : 20,
            height : 50
        },
        colours : {
            bg : "#000000",
            fill : "#ff9900",
            light : "#ffffff"
        }
    },
    //*** END options object: default options, can be overwritten by init call

    //*** BEGIN gameData object : the game elements
    gameData : {
        copter : {
            x : 20,
            y : 0,
            speed : 0,
            rotation : 0
        },
        walls : {
            counter : 0,
            currentHeight : 0,
            currentStep : 0,
            heightIncreaseInterval : 0,    // fudge
            current : []
        },
        obstacles : {
            counter : 0,
            current : []
        }
    },
    //***DEND gameData object : the game elements

    //*** BEGIN scores object : scores - ints and html objects
    scores : {
        current : 0,
        top : 0,
        elements : {
            current : null,
            top : null
        },
        halfStep : 0    // fudge
    },
    //*** END scores object : scores - ints and html objects

}