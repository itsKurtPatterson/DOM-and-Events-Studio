// Write your JavaScript code here.
// Remember to pay attention to page loading!
// 1. Use the window load event to ensure that all the elements have loaded before attaching event handlers.
window.addEventListener("load", function(){
    // DOM code goes here to ensure that all elements have been loaded.
    // 2. When the 'Take off' button is clicked, the following should happen:
    let takeOff = document.getElementById("takeoff");
    // a. A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
    takeOff.addEventListener('click', function(){
        let isReady = confirm("Confirm that the shuttle is ready for takeoff.");
        if(isReady){
            // b. The flight status should change to "Shuttle in flight."
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = 'Shuttle in flight';
            // c. The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            let backgroundColor = document.getElementById("shuttleBackground");
            backgroundColor.style.background = 'lightblue';
            // d. The shuttle height should increase by 10,000 miles.
            let shuttleHeight = document.getElementById('spaceShuttleHeight');
            shuttleHeight.innerHTML = 10000;
        } else {
            alert('We understand that you are not ready for take off, please select "Take off" and confirm when ready. Thanks!')
        }
    });
    // 3. When the "Land" button is clicked, the following should happen:
    let land = document.getElementById("landing");
    land.addEventListener('click', function(){
        // a. A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        alert("The shuttle is landing. Landing gear engaged.");
        // b. The flight status should change to "The shuttle has landed."
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerHTML = 'The shuttle has landed';
        // c. The background color of the shuttle flight screen should change from blue to green.
        let backgroundColor = document.getElementById("shuttleBackground");
        backgroundColor.style.background = 'green';
        // d. The shuttle height should go down to 0.
        let shuttleHeight = document.getElementById('spaceShuttleHeight');
        shuttleHeight.innerHTML = 0;
    });
    // 4. When the "Abort Mission" button is clicked, the following should happen:
    let missionAborted = document.getElementById("missionAbort");
    missionAborted.addEventListener('click', function(){
        // a. A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
        let isAborting = confirm("Confirm that you want to abort the mission.");
        if(isAborting){
            // b. The flight status should change to "Mission aborted."
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = 'Mission aborted';    
            // c. The background color of the shuttle flight screen should change from blue to green.
            let backgroundColor = document.getElementById("shuttleBackground");
            backgroundColor.style.background = 'green';    
            // d. The shuttle height should go to 0.
            let shuttleHeight = document.getElementById('spaceShuttleHeight');
            shuttleHeight.innerHTML = 0;    
        } else {
            alert("Abort Mission request has been cancelled.");
        }
    });
    // 5. When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
    let up = document.getElementById("upButton");
    let down = document.getElementById("downButton");
    let left = document.getElementById("leftButton");
    let right = document.getElementById("rightButton");
    function moveShuttleRight(){
        let rocket = document.getElementById('rocket');
        rocket.style.left = String(parseInt(rocket.style.left, 10) + 10) + 'px';
    };
    function moveShuttleLeft(){
        let rocket = document.getElementById('rocket');
        rocket.style.left = String(parseInt(rocket.style.left, 10) - 10) + 'px';
    };
    function moveShuttleUp(){
        let rocket = document.getElementById('rocket');
        rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) + 10) + 'px';
    };
    function moveShuttleDown(){
        let rocket = document.getElementById('rocket');
        rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) - 10) + 'px';
    };
    // a. The rocket image should move 10 px in the direction of the button that was clicked.
    // b. If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
    up.addEventListener('click', function(){
        let shuttleHeight = document.getElementById('spaceShuttleHeight').innerHTML;
        let updatedHeight = parseInt(shuttleHeight,10) + 10000;
        document.getElementById('spaceShuttleHeight').innerHTML = updatedHeight;
        moveShuttleUp();
    });
    down.addEventListener('click', function(){
        let shuttleHeight = document.getElementById('spaceShuttleHeight').innerHTML;
        let updatedHeight = parseInt(shuttleHeight,10) - 10000;
        document.getElementById('spaceShuttleHeight').innerHTML = updatedHeight;
        moveShuttleDown();
    });
    left.addEventListener('click', function(){
        moveShuttleLeft();
    });
    right.addEventListener('click', function(){
        moveShuttleRight();
    });
});