var inputWrapper = document.createElement('div');
inputWrapper.className = 'inputWrapper';
var resultWrapper = document.createElement('div');
resultWrapper.className = 'resultWrapper';

for (var k = 0; k < 9; k++) {
  var inputContainer = document.createElement('div');
  inputContainer.className = 'inputContainer';

  for (var i=0; i<9; i++) {
    var div =document.createElement('div');
    inputContainer.appendChild(div);
    var input = document.createElement('input');
    div.appendChild(input);
  }


  var resultContainer = document.createElement('div');
  resultContainer.className = 'resultContainer';

  for (var i=0; i<9; i++){
    var div =document.createElement('div');
    resultContainer.appendChild(div);
  }

  inputWrapper.appendChild(inputContainer);
  resultWrapper.appendChild(resultContainer);
}

var button = document.createElement('button');
button.textContent = "Решить";

document.body.appendChild(inputWrapper);
document.body.appendChild(resultWrapper);
document.body.appendChild(button);

var numbers = [];
// создала массив массивов
for (var i = 0; i < 9; i++) {
  var block = [];
  for (var i = 0; i < 9; i++) {
    block.push(null);
  }
  numbers.push(block);
}

var inputs = inputWrapper.getElementsByTagName('input');

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function(e) {
    // нажали  цифру или удаление
    if ((e.keyCode >= 46 && e.keyCode <= 57) || e.keyCode == 8) {
      console.log(e.target.value);
    }
  });
}
