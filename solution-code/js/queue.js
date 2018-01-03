var queueDataStructure = new QueueDataStructure();

$(document).ready(drawQueue());
$('#btn-enqueue').on('click', enqueueElement);
$('#btn-dequeue').on('click', dequeueElement);

function drawQueue() {
  var queue = $('#queue');
  queue.html('');

  for (var i = 0; i < queueDataStructure.MAX_SIZE; i++) {
    var content = queueDataStructure.queueControl[i] || '';
    var cssClass = content ? ' full' : '';

    $(queue).append('<div class="element' + cssClass + '">' + content + '</div>');
  }

  clearQueueControls();
}

function enqueueElement() {
  var element = $('#txt-enqueue').val();
  var result = queueDataStructure.enqueue(element);

  if (result === queueDataStructure.queueControl) {
    drawQueue();
    hideDequeuedElement();
  } else {
    showQueueOverflow();
  }

  clearQueueControls();
  enableDequeueAction();
}

function dequeueElement() {
  var element = queueDataStructure.dequeue();

  if (element === 'Queue Underflow') {
    showQueueUnderflow();
  } else {
    showEnqueuedElement(element);
    drawQueue();
  }

  clearQueueControls();
  enableEnqueueAction();
}

function showEnqueuedElement(element) {
  $('#queue-element').html(element);
}

function hideDequeuedElement(element) {
  $('#queue-element').html('');
}

function showQueueOverflow() {
  $('#btn-enqueue').prop('disabled', 'disabled');
  $('#queue-overflow').show();
}

function showQueueUnderflow() {
  $('#btn-dequeue').prop('disabled', 'disabled');
  $('#queue-underflow').show();
  $('#queue-element').html('');
}

function clearQueueControls() {
  $('#txt-enqueue').val('');
  $('#txt-enqueue').focus();
}

function enableEnqueueAction() {
  $('#btn-enqueue').prop('disabled', '');
  $('#queue-overflow').hide();
}

function enableDequeueAction() {
  $('#btn-dequeue').prop('disabled', '');
  $('#queue-underflow').hide();
}
