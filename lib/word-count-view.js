"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/* global document */

var WordCountView = (function () {
  function WordCountView() {
    _classCallCheck(this, WordCountView);

    var message;
    this.element = document.createElement("div");
    this.element.classList.add("word-count");
    message = document.createElement("div");
    message.classList.add("message");
    this.element.appendChild(message);
  }

  _createClass(WordCountView, {
    serialize: {
      value: function serialize() {}
    },
    destroy: {
      value: function destroy() {
        this.element.remove();
      }
    },
    getElement: {
      value: function getElement() {
        return this.element;
      }
    },
    setCount: {
      value: function setCount(count) {
        var displayText;
        displayText = count + " words.";
        this.element.children[0].textContent = displayText;
      }
    }
  });

  return WordCountView;
})();

module.exports = WordCountView;
/*serializeState*/