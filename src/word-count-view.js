/* global document */

class WordCountView {
  constructor(/*serializeState*/) {
    var message;
    this.element = document.createElement('div');
    this.element.classList.add('word-count');
    message = document.createElement('div');
    message.classList.add('message');
    this.element.appendChild(message);
  }

  serialize() {}

  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  setCount(count) {
    var displayText;
    displayText = count + " words.";
    this.element.children[0].textContent = displayText;
  }
}

module.exports = WordCountView;
