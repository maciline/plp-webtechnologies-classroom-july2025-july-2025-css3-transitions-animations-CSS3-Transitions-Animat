// Function to trigger CSS animation
function triggerAnimation(elementId, animationClass) {
  const el = document.getElementById(elementId);
  el.classList.add(animationClass);
  setTimeout(() => el.classList.remove(animationClass), 1000);
}

// Function with parameters and return value
function calculateArea(width, height) {
  return width * height;
}

// Function to show area result
function showArea() {
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);
  const area = calculateArea(width, height);
  document.getElementById("areaResult").textContent = "Area: " + area;
}

// Scope demo
let globalMessage = "Hello from global scope";

function showScopeDemo() {
  let localMessage = "Hello from local scope";
  console.log(globalMessage); // Accessible
  console.log(localMessage);  // Accessible
}