# getRightOfDecimal(float): string

Receives `float` and returns the digits on the right of the decimal.  
The digits are returned as a string in order to preserve any zeros at the beginning.

## Examples
```
getRightOfDecimal(-0.0001) --> '0001'

getRightOfDecimal(2.11) --> '11'
```

## Installation
`npm i  @writetome51/get-right-of-decimal`


## Loading
```
// if using TypeScript:
import {getRightOfDecimal} from '@writetome51/get-right-of-decimal'; 
// if using ES5 JavaScript:
var getRightOfDecimal = 
	require('@writetome51/get-right-of-decimal').getRightOfDecimal;
```