/* global atom */

"use strict";

var WordCountView = require("./word-count-view");
var CompositeDisposable = require("atom").CompositeDisposable;

var WordCount = {

  wordCountView: null,
  modalPanel: null,
  subscriptions: null,

  activate: function activate(state) {

    this.wordCountView = new WordCountView(state.wordCountViewState);

    this.modalPanel = atom.workspace.addModalPanel({
      item: this.wordCountView.getElement(),
      visible: false
    });

    this.subscriptions = new CompositeDisposable();

    return this.subscriptions.add(atom.commands.add("atom-workspace", {
      "word-count:toggle": (function (_this) {
        return function () {
          return _this.toggle();
        };
      })(this)
    }));
  },

  deactivate: function deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.wordCountView.destroy();
  },

  serialize: function serialize() {
    return {
      wordCountViewState: this.wordCountView.serialize()
    };
  },

  toggle: function toggle() {
    if (this.modalPanel.isVisible()) {
      return this.hide();
    } else {
      return this.show();
    }
  },

  hide: function hide() {
    this.disposableItem && this.disposableItem.dispose();
    this.modalPanel.hide();
  },

  calculate: function calculate() {
    var words;
    words = this.getCurrentText().split(/\s+/).length;
    this.wordCountView.setCount(words);
  },

  show: function show() {
    // get editor
    var editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }

    this.calculate();
    this.modalPanel.show();
    if (this.disposableItem === void 0 || this.disposableItem.disposed) {
      this.disposableItem = editor.onDidChangeSelectionRange((function (_this) {
        return function () {
          return _this.calculate();
        };
      })(this));
    }
  },

  getCurrentText: function getCurrentText() {
    var selection, text;

    // get editor
    var editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return "";
    }

    selection = editor.getSelectedText();
    text = editor.getText();
    return selection || text;
  }
};

module.exports = WordCount;