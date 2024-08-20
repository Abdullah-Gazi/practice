function calculateRectangleArea() {
    const length = parseFloat(document.getElementById('rectangleLength').value);
    const width = parseFloat(document.getElementById('rectangleWidth').value);
    const area = length * width;
  
    const resultElement = document.getElementById('rectangleAreaResult');
    resultElement.textContent = `Rectangle area: ${area}`;
  }
  
  function calculateTriangleArea() {
    const base = parseFloat(document.getElementById('triangleBase').value);
    const height = parseFloat(document.getElementById('triangleHeight').value);
    const area = (base * height) / 2;
  
    const resultElement = document.getElementById('triangleAreaResult');
    resultElement.textContent = `Triangle area: ${area}`;
  }
  
  function calculateCircleArea() {
    const radius = parseFloat(document.getElementById('circleRadius').value);
    const pi = Math.PI;
    const area = pi * radius * radius;
  
    const resultElement = document.getElementById('circleAreaResult');
    resultElement.textContent = `Circle area: ${area}`;
  }
  