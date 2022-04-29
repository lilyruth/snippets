
const App = function _App() {
 return `
  <h1>Hello Vanilla JS</h1>
  <div>Example of state management in Vanilla JS</div>
  <h2 id="count">${_App.state.count}</h2>
  <button id="buttonIncrease">Increase</button>
  <button id="buttonReset">Reset</button>
  <button id="buttonDecrease">Decrease</button>
 `;
}

App.state = {
 count: 0,
 increment: () => {
  setState(() => App.state.count++);
  console.log(App.state.count);
 },
 decrement: () => {
  setState(() => App.state.count--);
  console.log(App.state.count);
 },
 reset: () => {
  setState(() => App.state.count = 0);
  console.log(App.state.count);
 }
}

const updateCount = () => {
 document.getElementById('count').innerHTML = App.state.count;
}

const setState = callback => {
 callback();
 updateCount();
}

document.getElementById("app").innerHTML = App();
document
  .getElementById('buttonIncrease')
  .addEventListener('click', App.state.increment);
document
  .getElementById('buttonDecrease')
  .addEventListener('click', App.state.decrement);
document
  .getElementById('buttonReset')
  .addEventListener('click', App.state.reset);