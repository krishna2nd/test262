// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator remove leading StrWhiteSpaceChar
 *
 * @section: 15.1.2.3;
 * @path: 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.3_parseFloat/S15.1.2.3_A2_T3.js;
 * @description: StrWhiteSpaceChar :: NBSB (U+00A0);
 */

//CHECK#1
if (parseFloat("\u00A01.1") !== parseFloat("1.1")) {
  $ERROR('#1: parseFloat("\\u00A01.1") === parseFloat("1.1"). Actual: ' + (parseFloat("\u00A01.1")));
}

//CHECK#2
if (parseFloat("\u00A0\u00A0-1.1") !== parseFloat("-1.1")) {
  $ERROR('#2: parseFloat("\\u00A0\\u00A0-1.1") === parseFloat("-1.1"). Actual: ' + (parseFloat("\u00A0\u00A0-1.1")));
}

//CHECK#3
if (isNaN(parseFloat("\u00A0")) !== true) {
  $ERROR('#3: parseFloat("\\u00A0") === Not-a-Number. Actual: ' + (parseFloat("\u00A0")));
}
