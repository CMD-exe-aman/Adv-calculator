(function(){
  const screen = document.querySelector('.screen');
  const buttons = document.querySelectorAll('.num');
  const symbols = document.querySelectorAll('.symbol');
  const clear = document.querySelector('#clr');
  const equal = document.querySelector('#equal');
  const backspaceBtn = document.getElementById('bkspce');

  buttons.forEach(button => {
    button.addEventListener('click', e => {
      screen.value += e.target.dataset.num;
    });
  });

  symbols.forEach(symbol => {
    symbol.addEventListener('click', e => {
      screen.value += e.target.dataset.num;
    });
  });


  equal.addEventListener('click', () => {
    let expression = screen.value;

    if (!expression) {
      screen.value = 'Enter a value';
      return;
    }

    try {
      expression = expression.replace(/√(\d+(\.\d+)?)/g, (match, number) => {
        return `Math.sqrt(${number})`;
      });
 
      expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, number) => {
        return `(${number}/100)`;
      });
      expression = expression.replace(/(\d+(\.\d+)?)\^(\d+(\.\d+)?)/g, (match, base, _, exponent) => {
        return `Math.pow(${base},${exponent})`;
      });

      const result = eval(expression);
      screen.value = result;
    } catch {
      screen.value = 'Error';
    }
  });

backspaceBtn.addEventListener('click', () => {
    screen.value = screen.value.slice(0, -1);
});

  
  clear.addEventListener('click', () => {
    screen.value = '';
  });

})();
