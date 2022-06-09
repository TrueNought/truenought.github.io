/* ----------------------PARTICLES EFFECT---------------------- */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// // get mouse position
// let mouse = {
//     x: null,
//     y: null,
//     radius: (canvas.height/80) * (canvas.width/80);
// }

// window.addEventListener('mousemove', 
//     function(event) {
//         mouse.x = event.x;
//         mouse.y = event.y;
//     }
// );

// Create particle
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    // Method that draws individual particles
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();
    }
    // Check relative position of particles, and redraw/move
    update() {
        // check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height|| this.y < 0) {
            this.directionY = -this.directionY;
        }

        // // Check collision detection - mouse position/particle position
        // let dx = mouse.x - this.x;
        // let dy = mouse.y - this.y;
        // let distance = Math.sqrt(dx*dx + dy*dy);
        // if (distance < mouse.radius + this.size) {
        //     if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        //         this.x += 10;
        //     }
        //     if (mouse.x > this.x && this.x > this.size * 10) {
        //         this.x -= 10;
        //     }
        //     if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        //         this.y += 10;
        //     }
        //     if (mouse.y > this.y && this.y > this.size * 10) {
        //         this.y -= 10;
        //     }
        // }

        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;
        //draw particle
        this.draw();
    }
}

// Create array that stores particles
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 6000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = 0.3 - (Math.random() * 0.5);
        let directionY = 0.3 - (Math.random() * 0.5);
        let color = 'rgba(255, 255, 255, 0.7)';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Check if particles are close enough to be connected by a line
function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas.width / 9) * (canvas.height / 9)) {
                opacityValue = 0.7 - (distance/15000);
                ctx.strokeStyle = 'rgba(255, 255, 255, ' + opacityValue + ')';
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

// Animation
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

// Window resize event
window.addEventListener('resize',
    function() {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        // mouse.radius = ((canvas.height/80) * (canvas.height/80));
        init();
    }
);

// // Mouse out event
// window.addEventListener('mouseout',
//     function() {
//         mouse.x = null;
//         mouse.x = null;
//     }
// )

init();
animate();

/* ----------------------RESPONSIVE NAVIGATION BAR---------------------- */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


/* ----------------------TEXT OVERLAY WITH TYPING EFFECT---------------------- */

// Array of sentences to show
var _CONTENT = [ 
    ">Welcome To My Site.", 
    ">I Am A Developer.",
	">I Am An Innovator.", 
	">I Am A Student.", 
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#animated-text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// // Hide the cursor
		// _CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '>') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if (_PART == (_CONTENT.length - 1)) {
			_PART = 0;
        } else {
			_PART++;
        }
		_PART_INDEX = 0;

		// Display the next sentence after a specified time interval
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 100);
	}
}

// Start typing animation when site is loaded
_INTERVAL_VAL = setInterval(Type, 100);

/* ----------------------COLLAPSIBLE ANIMATION---------------------- */

var collection = document.getElementsByClassName("collapsible");

for (var i = 0; i < collection.length; i++) {
    collection[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            this.style.borderRadius = "1rem";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.style.borderRadius = "1rem 1rem 0 0";
        }
  });
} 