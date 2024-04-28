// Ask 8 Ball //
function shake() {
  var questionInput = document.getElementById('questionInput');
  var question = questionInput.value.trim();
  var messageDisplay = document.querySelector('.message');
  var magic8ball = document.querySelector('.magic8ball');

  // Clear the input field
  questionInput.value = '';

  if (!question) {
    messageDisplay.textContent = "Ask me a question";
    return;
  }

  var messages = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];

  var randomIndex = Math.floor(Math.random() * messages.length);
  var message = messages[randomIndex];

  messageDisplay.textContent = message;
  magic8ball.classList.add('shake-animation');

  // Remove the shaking class after the animation completes
  setTimeout(function() {
    magic8ball.classList.remove('shake-animation');
  }, 500);
}


// RANDOM GENERATOR //
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const generateBtn = document.getElementById('generateBtn');
const resultDisplay = document.getElementById('result');
const container = document.querySelector('.container');

generateBtn.addEventListener('click', function() {
    const min = parseFloat(minInput.value);
    const max = parseFloat(maxInput.value);

    if (!isNaN(min) && !isNaN(max)) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resultDisplay.textContent = `Random Number: ${randomNumber}`;
        container.classList.add('shake-animation');
        setTimeout(() => {
            container.classList.remove('shake-animation');
        }, 500); // Duration of the shake animation in milliseconds
    } else {
        resultDisplay.textContent = "Enter Min-Max numbers.";
    }
});


// DISCORD //

function showContent(contentId, event) {
  // Prevent the default behavior of the anchor tag
  event.preventDefault();
  
  // Remove "active" class from all navigation links
  var navLinks = document.getElementsByClassName('nav-link');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('active');
  }

  // Add "active" class to the clicked navigation link
  event.currentTarget.classList.add('active');

  // Hide all content divs
  var contents = document.getElementsByClassName('content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }

  // Show the selected content div
  var selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }
}

// Initially, mark the "Rules" link as active
document.querySelector('.nav-link.active').addEventListener('click', function(event) {
  showContent('rules', event);
});


// Hover effect Niviour

const button = document.getElementById('niviourButton');
const darkerBackground = document.querySelector('.niviour-background-darker');

button.addEventListener('mouseenter', () => {
  darkerBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; // Change opacity to 0.3 on hover
  darkerBackground.style.backdropFilter = 'blur(2px)'; // Change blur to 2px on hover
});

button.addEventListener('mouseleave', () => {
  darkerBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'; // Revert opacity to 0.5 on mouse leave
  darkerBackground.style.backdropFilter = 'blur(0px)'; // Revert blur to 0px on mouse leave
});