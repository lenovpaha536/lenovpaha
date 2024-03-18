const math = require('mathjs');

function collapseWaveFunction(psi) {
    // Perform collapse of the wave function
    const probabilities = psi.map(vector => math.sum(math.square(vector)));
    const collapsedIndex = math.pickRandom(probabilities);
    return psi[collapsedIndex];
}

function calculateExpectationValue(operator, state) {
    // Calculate the expectation value of an operator for a given state
    const adjointState = math.transpose(math.conj(state));
    const expectationValue = math.multiply(adjointState, math.multiply(operator, state));
    return expectationValue[0][0];
}

function calculateCommutator(A, B) {
    // Calculate the commutator of two operators
    const commutator = math.subtract(math.multiply(A, B), math.multiply(B, A));
    return commutator;
}

module.exports = {
    collapseWaveFunction,
    calculateExpectationValue,
    calculateCommutator
};
