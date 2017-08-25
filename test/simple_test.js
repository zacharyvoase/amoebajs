amoeba = require('./dist/amoeba_node.js')

amoeba.ready.then(() => {
    let solver = new amoeba.Solver(),
        v1 = solver.newVariable(),
        v2 = solver.newVariable()

    v1.mustBeGreaterThanEqual(0).add()
    v1.mustBeLessThanEqual(v2.divide(2).subtract(4)).add()

    console.log("v1 = " + v1.value)
    console.log("v2 = " + v2.value)

    v1.suggest(5.5)

    console.log("v1 = " + v1.value)
    console.log("v2 = " + v2.value)
})
