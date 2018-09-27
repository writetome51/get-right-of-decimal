import { isFloat } from 'basic-data-handling/isInteger_isFloat';


// It's important this returns a string, mainly because it might return a set of
// digits that begin with leading zeros, for instance: '005'.  If this were converted
// to a number, Javascript would eliminate the leading zeros and return 5.

export function getRightOfDecimal(num): string {
	if (isFloat(num)) return (String(num).split('.')[1]);
	else throw new Error('The passed number does not have a decimal');
}
