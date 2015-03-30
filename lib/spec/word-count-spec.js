"use strict";

// var WordCount;
//
// WordCount = require('../lib/word-count');
//
// describe("WordCount", function() {
//   var activationPromise, workspaceElement, _ref;
//
//   beforeEach(function() {
//     workspaceElement = atom.views.getView(atom.workspace);
//     return activationPromise = atom.packages.activatePackage('word-count');
//   });
//
//   describe("when the word-count:toggle event is triggered", function() {
//     it("hides and shows the modal panel", function() {
//       expect(workspaceElement.querySelector('.word-count')).not.toExist();
//       atom.commands.dispatch(workspaceElement, 'word-count:toggle');
//       waitsForPromise(function() {
//         return activationPromise;
//       });
//       return runs(function() {
//         var wordCountElement, wordCountPanel;
//         expect(workspaceElement.querySelector('.word-count')).toExist();
//         wordCountElement = workspaceElement.querySelector('.word-count');
//         expect(wordCountElement).toExist();
//         wordCountPanel = atom.workspace.panelForItem(wordCountElement);
//         expect(wordCountPanel.isVisible()).toBe(true);
//         atom.commands.dispatch(workspaceElement, 'word-count:toggle');
//         return expect(wordCountPanel.isVisible()).toBe(false);
//       });
//     });
//     it("hides and shows the view", function() {
//       jasmine.attachToDOM(workspaceElement);
//       expect(workspaceElement.querySelector('.word-count')).not.toExist();
//       atom.commands.dispatch(workspaceElement, 'word-count:toggle');
//       waitsForPromise(function() {
//         return activationPromise;
//       });
//       return runs(function() {
//         var wordCountElement;
//         wordCountElement = workspaceElement.querySelector('.word-count');
//         expect(wordCountElement).toBeVisible();
//         atom.commands.dispatch(workspaceElement, 'word-count:toggle');
//         return expect(wordCountElement).not.toBeVisible();
//       });
//     });
//   });
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JkLWNvdW50LXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9