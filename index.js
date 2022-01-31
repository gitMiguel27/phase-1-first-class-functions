function receivesAFunction(calledFunction) {
    calledFunction();
}

function returnsANamedFunction() {
    return function hi(){};
}

function returnsAnAnonymousFunction() {
    return function(){};
}