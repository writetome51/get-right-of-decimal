import {errorIfNotFloat} from 'error-if-not-float';
import {toStr} from '@writetome51/to-str';


// It's important this returns a string, mainly because it might return a set of
// digits that begin with leading zeros, for instance: '005'.  If this were converted
// to a number, Javascript would eliminate the leading zeros and return 5.

export function getRightOfDecimal(num) {
	errorIfNotFloat(num);
	return (toStr(num).split('.')[1]);
}
