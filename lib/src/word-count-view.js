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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmQtY291bnQtdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUVNLGFBQWE7QUFDTixXQURQLGFBQWEsR0FDZTswQkFENUIsYUFBYTs7QUFFZixRQUFJLE9BQU8sQ0FBQztBQUNaLFFBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxRQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsV0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEMsV0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsUUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDbkM7O2VBUkcsYUFBYTtBQVVqQixhQUFTO2FBQUEscUJBQUcsRUFBRTs7QUFFZCxXQUFPO2FBQUEsbUJBQUc7QUFDUixZQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO09BQ3ZCOztBQUVELGNBQVU7YUFBQSxzQkFBRztBQUNYLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztPQUNyQjs7QUFFRCxZQUFRO2FBQUEsa0JBQUMsS0FBSyxFQUFFO0FBQ2QsWUFBSSxXQUFXLENBQUM7QUFDaEIsbUJBQVcsR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ2hDLFlBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7T0FDcEQ7Ozs7U0F4QkcsYUFBYTs7O0FBMkJuQixNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyIsImZpbGUiOiJ3b3JkLWNvdW50LXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgZG9jdW1lbnQgKi9cblxuY2xhc3MgV29yZENvdW50VmlldyB7XG4gIGNvbnN0cnVjdG9yKC8qc2VyaWFsaXplU3RhdGUqLykge1xuICAgIHZhciBtZXNzYWdlO1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3b3JkLWNvdW50Jyk7XG4gICAgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHt9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICBzZXRDb3VudChjb3VudCkge1xuICAgIHZhciBkaXNwbGF5VGV4dDtcbiAgICBkaXNwbGF5VGV4dCA9IGNvdW50ICsgXCIgd29yZHMuXCI7XG4gICAgdGhpcy5lbGVtZW50LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gZGlzcGxheVRleHQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXb3JkQ291bnRWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9