var queueDataStructure = new QueueDataStructure();

$(document).ready(_drawQueue());
$("#btn-enqueue").on("click", _enqueueElement);
$("#btn-dequeue").on("click", _dequeueElement);

function _drawQueue () {
  var queue = $("#queue");
  queue.html("");

  for (var i = 0; i < queueDataStructure.MAX_SIZE; i++) {
    var content = queueDataStructure.queueControl[i] || "";
    var cssClass = content ? " full" : "";

    $(queue).append("<div class='element" + cssClass + "'>" + content + "</div>");
  }

  _clearQueueControls();
}

function _enqueueElement () {
  var element = $("#txt-enqueue").val();
  var result = queueDataStructure.enqueue(element);

  if (result === queueDataStructure.queueControl) {
    _drawQueue();
    _hideDequeuedElement();
  } else {
    _showQueueOverflow();
  }

  _clearQueueControls();
  _enableDequeueAction();
}

function _dequeueElement () {
  var element = queueDataStructure.dequeue();

  if (element === "Queue Underflow") {
    _showQueueUnderflow();
  } else {
    _showEnqueuedElement(element);
    _drawQueue();
  }

  _clearQueueControls();
  _enableEnqueueAction();
}

function _showEnqueuedElement (element) {
  $("#queue-element").html(element);
}

function _hideDequeuedElement (element) {
  $("#queue-element").html("");
}

function _showQueueOverflow () {
  $("#btn-enqueue").prop("disabled", "disabled");
  $("#queue-overflow").show();
}

function _showQueueUnderflow () {
  $("#btn-dequeue").prop("disabled", "disabled");
  $("#queue-underflow").show();
  $("#queue-element").html("");
}

function _clearQueueControls () {
  $("#txt-enqueue").val("");
  $("#txt-enqueue").focus();
}

function _enableEnqueueAction () {
  $("#btn-enqueue").prop("disabled", "");
  $("#queue-overflow").hide();
}

function _enableDequeueAction () {
  $("#btn-dequeue").prop("disabled", "");
  $("#queue-underflow").hide();
}
