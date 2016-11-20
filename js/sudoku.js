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
    input.setAttribute("data-id", 9 * k + i);
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
// создала массивовссив массивов
for (var i = 0; i < 9; i++) {
  var block = [];
  for (var j = 0; j < 9; j++) {
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
      //получала id ячейки
      var id = e.target.getAttribute('data-id');
      // получила номер блока
      var block = Math.floor(id / 9);
      // получила номер ячейки в блоке
      var cell  = id - block * 9;
      // записала значение в массив
      var value;
      if (e.target.value === "") {
        value = null;
      } else {
        value = e.target.value;
      }
      numbers[block][cell] = value;
    }
  });
}
