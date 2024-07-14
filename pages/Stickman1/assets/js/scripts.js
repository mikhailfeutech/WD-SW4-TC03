document.getElementById('dance-button').addEventListener('click', function() {
    const stickman = document.getElementById('stickman');
    stickman.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        stickman.style.transform = 'translateY(0)';
    }, 500);
});
