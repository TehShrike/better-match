module.exports = function match(regex, str) {
	const definitelyGlobal = forceGlobal(regex)
	let match = null
	const matches = []

	while ((match = definitelyGlobal.exec(str)) !== null) {
		const [ , ...captured ] = match
		matches.push(captured)
	}

	return matches
}

function forceGlobal(regex) {
	const isGlobal = regex.flags.split('').some(flag => flag === 'g')

	return isGlobal ? regex : new RegExp(regex, regex.flags + 'g')
}
