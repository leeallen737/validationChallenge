
const runTests = () => {
    testRequired()
    testNumber()
    testZeroToOneHundred()
    testMaxLength20()
}

const testAFunction = (functionName, cases) => {
    console.log(`TESTING \`${functionName}()\` FUNCTION.`)
    try {
        cases()
    } catch (e) {
    if (e.toString() === `ReferenceError: ${functionName} is not defined`) {
        console.log("\x1b[31m%s\x1b[0m", `Whoops! You haven't made a \`${functionName}()\` function yet.`)
        // console.log(`Make a function called \`${functionName}\` and refresh the page to try again.`)
    } else {
        console.log('Something went wrong...', e)
    }
}
console.log('\n\n')
}

const test = (testCase, expectedOutput, actualOutput) => {
    const success = actualOutput === expectedOutput
    success ?
        console.log("\x1b[1m\x1b[5m\x1b[1m\x1b[5m\x1b[32m%s\x1b[0m", `✔️ ${testCase}`) :
        console.log("\x1b[31m%s\x1b[0m", `❌ ${testCase}`)
    !success && console.log(`    EXPECTED: ${expectedOutput}\n    RECEIVED: ${actualOutput}\n\n`)

    // const success = actualOutput === expectedOutput
    // console.log(success ? "\x1b[1m\x1b[5m\x1b[1m\x1b[5m\x1b[32m%s\x1b[0m" : "\x1b[31m%s\x1b[0m", testCase)
    // success ?
    //     console.log("\x1b[1m\x1b[5m\x1b[1m\x1b[5m\x1b[32m%s\x1b[0m", "✔️ PASSED") :
    //     console.log("\x1b[31m%s\x1b[0m", `❌ FAILED\n`, `   EXPECTED: ${expectedOutput}\n    RECEIVED: ${actualOutput}\n\n`)
}

const testRequired = () => {
    testAFunction('required', () => {
        const emptyString = required("")
        test("CASE 1: EMPTY STRING", "This field is required", emptyString)

        const noInput = required()
        test("CASE 2: NO INPUT", "This field is required", noInput)

        const validString = required("Hello")
        test("CASE 3: VALID VALUE (STRING)", undefined, validString)

        const validNumber = required(123)
        test("CASE 4: VALID VALUE (NUMBER)", undefined, validNumber)

        const validNumberZero = required(0)
        test("CASE 5: VALID VALUE (NUMBER ZERO)", undefined, validNumberZero)

        const validTrue = required(0)
        test("CASE 5: VALID VALUE (BOOLEAN TRUE)", undefined, validTrue)

        const invalidFalse = required(0)
        test("CASE 5: INVALID VALUE (BOOLEAN FALSE)", "This field is required", invalidFalse)
    })
}

const testNumber = () => {
    testAFunction('validateNumber', () => {
        const emptyString = validateNumber("")
        test("CASE 1: EMPTY STRING", undefined, emptyString)

        const noInput = validateNumber()
        test("CASE 2: NO INPUT", undefined, noInput)

        const validString = validateNumber("Hello")
        test("CASE 3: INVALID VALUE (STRING)", "Must be a number", validString)

        const validNumber = validateNumber(123)
        test("CASE 4: VALID VALUE (NUMBER)", undefined, validNumber)

        const validNumberZero = validateNumber(0)
        test("CASE 5: VALID VALUE (NUMBER ZERO)", undefined, validNumberZero)

        const validNumberNegative = validateNumber(-123)
        test("CASE 5: VALID VALUE (NEGATIVE NUMBER)", undefined, validNumberNegative)
    })
}

const testZeroToOneHundred = () => {
    testAFunction('zeroToOneHundred', () => {
        const emptyString = zeroToOneHundred("")
        test("CASE 1: EMPTY STRING", undefined, emptyString)

        const noInput = zeroToOneHundred()
        test("CASE 2: NO INPUT", undefined, noInput)

        const validString = zeroToOneHundred("Hello")
        test("CASE 3: INVALID VALUE (STRING)", "Must be a number between 0 and 100", validString)

        const validNumber = zeroToOneHundred(10)
        test("CASE 4: VALID VALUE (NUMBER 10)", undefined, validNumber)

        const invalidNumber = zeroToOneHundred(123)
        test("CASE 4: INVALID VALUE (NUMBER 123)", 'Must be a number between 0 and 100', invalidNumber)

        const validNumberZero = zeroToOneHundred(0)
        test("CASE 5: VALID VALUE (NUMBER ZERO)", undefined, validNumberZero)

        const validNumberNegative = zeroToOneHundred(-10)
        test("CASE 5: INVALID VALUE (NEGATIVE NUMBER)", 'Must be a number between 0 and 100', validNumberNegative)
    })
}

const testMaxLength20 = () => {
    testAFunction('maxLength20', () => {
        const emptyString = maxLength20("")
        test("CASE 1: EMPTY STRING", undefined, emptyString)

        const noInput = maxLength20()
        test("CASE 2: NO INPUT", undefined, noInput)

        const validString = maxLength20("Hello")
        test("CASE 3: VALID VALUE (STRING)", undefined, validString)

        const invalidString = maxLength20("abcdefghijklmnopqrstuvwxyz")
        test("CASE 4: INVALID VALUE (LONG STRING)", "Must be less than 20 characters long", invalidString)
    })
}

runTests()
