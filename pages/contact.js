export default function renderApp1() {
  // 1. The CSS styles
  const styles = `
    <style>
      .card {
        padding: 20px;
        background-color: #f0f0f0;
        border-radius: 8px;
        font-family: sans-serif;
        text-align: center;
      }
      .btn {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
      }
    </style>
  `;

  // 2. The HTML structure
  const html = `
    <div class="card">
      <h2>Hello World!</h2>
      <p>This entire app lives inside a JavaScript function.</p>
      <button class="btn" id="clickMe">Click Me</button>
      <p>Count: <span id="counter">0</span></p>
    </div>
  `;

/*
  // 3. The JavaScript logic (wrapped in a script tag or run after injection)
  const script = `
    <script>
      // We use a timeout to make sure the HTML is on the page before looking for the button
      setTimeout(() => {
        const button = document.getElementById('clickMe');
        if (button) {
          button.addEventListener('click', () => {
            alert('Button clicked inside the app!');
          });
        }
      }, 0);
    </script>
  `;
  */
  
        // We use a timeout to make sure the HTML is on the page before looking for the button
      setTimeout(() => {
        let count = 0;
        const display = document.getElementById("counter");
        const button = document.getElementById('clickMe');
        if (button) {
          button.addEventListener('click', () => {
            count++;
            display.textContent = count; 
          });
        }
      }, 0);

  // Combine everything together
  //return `${styles}${html}${script}`;
  return `${styles}${html}`;
}
