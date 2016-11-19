var inputWrapper = document.createElement('div');
inputWrapper.className = 'inputWrapper';
var resultWrapper = document.createElement('div');
resultWrapper.className = 'resultWrapper';


var hendler =function (event) {
  console.log(event.target);
}

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
