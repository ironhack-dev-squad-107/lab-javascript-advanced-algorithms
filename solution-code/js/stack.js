var stackDataStructure = new StackDataStructure();

$(document).ready(drawStack());
$('#btn-add-stack').on('click', addElementToStack);
$('#btn-take-stack').on('click', takeElementFromStack);

function drawStack() {
  var stack = $('#stack');
  stack.html('');

  for (var i = 0; i < stackDataStructure.MAXSIZE; i++) {
    var content = stackDataStructure.stackControl[i] || '';
    var cssClass = content ? ' full' : '';

    $(stack).prepend('<div class="element' + cssClass + '">' + content + '</div>');
  }

  clearStackControls();
}

function addElementToStack() {
  var element = $('#txt-insert-stack').val();
  var result = stackDataStructure.push(element);

  if (result === stackDataStructure.stackControl) {
    drawStack();
    hideTakenElement();
  } else {
    showStackOverflow();
  }

  clearStackControls();
  enableTakeAction();
}

function takeElementFromStack() {
  var element = stackDataStructure.pop();

  if (element === 'Stack Underflow') {
    showStackUnderflow();
  } else {
    showTakenElement(element);
    drawStack();
  }

  clearStackControls();
  enableAddAction();
}

function showTakenElement(element) {
  $('#stack-element').html(element);
}

function hideTakenElement(element) {
  $('#stack-element').html('');
}

function showStackOverflow() {
  $('#btn-add-stack').prop('disabled', 'disabled');
  $('#stack-overflow').show();
}

function showStackUnderflow() {
  $('#stack-element').html('');
  $('#btn-take-stack').prop('disabled', 'disabled');
  $('#stack-underflow').show();
}

function clearStackControls() {
  $('#txt-insert-stack').val('');
  $('#txt-insert-stack').focus();
}

function enableAddAction() {
  $('#btn-add-stack').prop('disabled', '');
  $('#stack-overflow').hide();
}

function enableTakeAction() {
  $('#btn-take-stack').prop('disabled', '');
  $('#stack-underflow').hide();
}
