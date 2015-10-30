///<reference path="fourslash.ts" />

// Check for any odd symbol leakage

// @allowNonTsExtensions: true
// @Filename: myMod.js
//// function myCtor(x) {
////     this.qua = 10;
//// }
//// myCtor.prototype.foo = function() { return 32 };
//// myCtor.prototype.bar = function() { return '' };
//// 
//// myCtor/*1*/

goTo.marker('1');
edit.insert('.');

// Check members of the function
verify.completionListContains('prototype', undefined, undefined, 'property');
verify.completionListContains('foo', undefined, undefined, 'warning');
verify.completionListContains('bar', undefined, undefined, 'warning');
verify.completionListContains('qua', undefined, undefined, 'warning');

// Check members of function.prototype
edit.insert('prototype.');
debugger;
debug.printMemberListMembers();
verify.completionListContains('foo', undefined, undefined, 'method');
verify.completionListContains('bar', undefined, undefined, 'method');
verify.completionListContains('qua', undefined, undefined, 'warning');
verify.completionListContains('prototype', undefined, undefined, 'warning');

// debug.printErrorList();
// debug.printCurrentQuickInfo();
// edit.insert('.');
// verify.completionListContains('toFixed', undefined, undefined, 'method');
