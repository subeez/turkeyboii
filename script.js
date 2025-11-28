document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('open-button');
    const openingScreen = document.getElementById('opening-screen');
    const letterContent = document.getElementById('letter-content');
    const emoteContainers = document.querySelectorAll('.emote-container');

    // 1. Button Click Handler
    openButton.addEventListener('click', () => {
        // Hide the button screen
        openingScreen.style.display = 'none';
        
        // Show the letter content
        letterContent.classList.remove('hidden');
        
        // Optional: Scroll to the top of the new content
        window.scrollTo(0, 0);
    });

    // 2. Moving Emotes Logic (Wiggle/Float Effect)
    emoteContainers.forEach((emote, index) => {
        // Randomize the speed/intensity for a natural look
        const duration = 5 + Math.random() * 5; // 5s to 10s
        const amplitudeX = 10 + Math.random() * 10; // 10px to 20px
        const amplitudeY = 10 + Math.random() * 10; // 10px to 20px

        // Apply a unique animation to each emote
        emote.style.animation = `float ${duration}s ease-in-out infinite alternate`;
        
        // Custom property for the wiggle keyframes
        emote.style.setProperty('--wiggle-x', `${amplitudeX}px`);
        emote.style.setProperty('--wiggle-y', `${amplitudeY}px`);
    });

    // We must define the keyframes in JavaScript by injecting them into the CSS
    // to allow each emote to have slightly different movement properties.
    const styleSheet = document.styleSheets[0];
    const keyframes = `
        @keyframes float {
            0% { 
                transform: translate(0, 0) rotate(0deg); 
            }
            100% { 
                /* Use CSS Custom Properties defined in the loop */
                transform: translate(var(--wiggle-x, 20px), var(--wiggle-y, 20px)) rotate(5deg); 
            }
        }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    // --- Falling leaves generator ---
    function createLeaves(count = 12) {
        const leafEmojis = ['🍂', '🍁', '🍃'];
        for (let i = 0; i < count; i++) {
            const leaf = document.createElement('div');
            leaf.className = 'falling-leaf';
            const span = document.createElement('span');
            span.textContent = leafEmojis[Math.floor(Math.random() * leafEmojis.length)];
            leaf.appendChild(span);

            const left = Math.random() * 100; // vw
            const delay = Math.random() * 6; // seconds
            const duration = 6 + Math.random() * 10; // seconds
            const drift = (Math.random() * 300 - 150) + 'px'; // -150 to 150px
            const size = (12 + Math.random() * 28) + 'px';

            leaf.style.setProperty('--left', left + 'vw');
            leaf.style.setProperty('--fall-delay', delay + 's');
            leaf.style.setProperty('--fall-duration', duration + 's');
            leaf.style.setProperty('--drift', drift);
            leaf.style.setProperty('--leaf-size', size);
            leaf.style.left = left + 'vw';

            document.body.appendChild(leaf);

            // Remove leaf after it's done falling
            setTimeout(() => {
                leaf.remove();
            }, (delay + duration) * 1000 + 1000);
        }
    }

    // Spawn an initial batch and then periodically spawn more leaves
    createLeaves(14);
    setInterval(() => createLeaves(6), 5000);
});
