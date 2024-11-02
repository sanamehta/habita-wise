function getMockScore() {
    return Math.floor(Math.random() * 50) + 50; // Generates a score between 50 and 100
  }
  
  function addHabitabilityScore() {
    const propertyCards = document.querySelectorAll('[data-test="property-card"], .property-card');
  
    propertyCards.forEach(card => {
      if (!card.querySelector('.habitability-score-overlay')) {
        const scoreOverlay = document.createElement('div');
        scoreOverlay.className = 'habitability-score-overlay';
        scoreOverlay.innerText = `Score: ${getMockScore()}/100`;
        
        scoreOverlay.style.position = 'absolute';
        scoreOverlay.style.top = '10px';
        scoreOverlay.style.right = '10px';
        scoreOverlay.style.backgroundColor = 'rgba(0, 128, 0, 0.8)';
        scoreOverlay.style.color = 'white';
        scoreOverlay.style.padding = '5px 10px';
        scoreOverlay.style.borderRadius = '5px';
        scoreOverlay.style.fontSize = '12px';
        scoreOverlay.style.zIndex = '10';
  
        card.style.position = 'relative';
        card.appendChild(scoreOverlay);
      }
    });
  }
  
  // Run addHabitabilityScore every 2 seconds to handle dynamically loaded content
  setInterval(addHabitabilityScore, 2000);
  
  
  // Run the function to add scores once the page has loaded
  window.addEventListener('load', addHabitabilityScore);
  