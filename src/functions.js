export function formatString(string, stringFormatParametrs) {
	stringFormatParametrs = stringFormatParametrs || [0]
	string = string.replace('_', ' ').split('')
	return string.map((symbol, index) => (stringFormatParametrs.includes(index) ? symbol.toUpperCase() : symbol.toLowerCase())).join('')
}
