const stickman = document.getElementById('stickman-game');
let position = { x: 0, y: 0 };

document.addEventListener('keydown', (event) => {
    const step = 10; // Movement step in pixels
    switch(event.key) {
        case 'ArrowUp':
            position.y -= step;
            break;
        case 'ArrowDown':
            position.y += step;
            break;
        case 'ArrowLeft':
            position.x -= step;
            break;
        case 'ArrowRight':
            position.x += step;
            break;
    }
    stickman.style.transform = `translate(${position.x}px, ${position.y}px)`;
});
