module.exports = function match(regex, str) {
	let match = null
	const matches = []

	while ((match = regex.exec(str)) !== null) {
		const [ , ...captured ] = match
		matches.push(captured)
	}

	return matches
}
