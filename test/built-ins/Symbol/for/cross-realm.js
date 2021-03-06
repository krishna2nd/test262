// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-symbol.for
es6id: 19.4.2.1
description: Global symbol registry is shared by all realms
info: >
    The GlobalSymbolRegistry is a List that is globally available. It is shared
    by all realms. Prior to the evaluation of any ECMAScript code it is
    initialized as a new empty List.
---*/

var OSymbol = $.createRealm().global.Symbol;
var parent = Symbol.for('parent');
var child = OSymbol.for('child');

assert.notSameValue(Symbol.for, OSymbol.for);
assert.sameValue(parent, OSymbol.for('parent'));
assert.sameValue(Symbol.for('child'), child);
