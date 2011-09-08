// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When "continue Identifier" is evaluated (continue, empty, empty) is returned
 *
 * @section: 12.7;
 * @path: 12_Statement/12.7_The_continue_Statement/S12.7_A3.js;
 * @description: Simple using continue without Identifier and labeled loop;
 */

LABEL_OUT : var x=0, y=0;

LABEL_DO_LOOP : do {
    LABEL_IN : x=2;
    continue ;
    LABEL_IN_2 : var y=2;
    
    function IN_DO_FUNC(){}
} while(0);

LABEL_ANOTHER_LOOP : do {
    ;
} while(0);

function OUT_FUNC(){}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ((x!==2)&&(y!==0)) {
	$ERROR('#1: x === 2 and y === 0. Actual:  x ==='+x+' and y ==='+ y  );
}
//
//////////////////////////////////////////////////////////////////////////////
