const commandInput = document.getElementById('command');
const resultDisplay = document.getElementById('result');

// Function to handle the voice command
function handleVoiceCommand(event) {
  const command = event.results[0][0].transcript.toLowerCase();
  if (command.includes('hello doto')) {
    const expression = command.replace('hello doto', '').trim();
    try {
      const result = eval(expression);
      resultDisplay.textContent = `Result: ${result}`;
    } catch (error) {
      resultDisplay.textContent = 'Invalid Expression';
    }
  }
}

// Initialize SpeechRecognition API
const recognition = new window.SpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;
recognition.onresult = handleVoiceCommand;

// Event listener for the search box icon to trigger voice recognition
const searchIcon = document.querySelector('.search-box i');
searchIcon.addEventListener('click', () => {
  recognition.start();
});

// Event listener for input focus to start voice recognition
commandInput.addEventListener('focus', () => {
  recognition.start();
});
