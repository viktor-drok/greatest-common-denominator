
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

btn.onclick = function () {
    output.value = calcGreatestCommonDenominator(input1.value, input2.value)
}

function calcGreatestCommonDenominator(num1, num2) {
    const multipliers1 = findPrimeMultipliers(num1)
    const multipliers2 = findPrimeMultipliers(num2)

    const multipliers = findCommonValues(multipliers1, multipliers2)
    const cd = calcProduct(multipliers)

    return cd
}

function findPrimeMultipliers(num) {
    const multipliers = []

    for (let i = 0; i < primeNumbers.length; i++) {
        while (num % primeNumbers[i] === 0) {
            multipliers.push(primeNumbers[i])
            num /= primeNumbers[i]
        }

        if (num === 1) return multipliers
    }
}

function findCommonValues(arr1, arr2) {
    const commonValues = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                commonValues.push(arr1[i])
                arr2.splice(j, 1)
                break
            }
        }
    }
    return commonValues
}

function calcProduct(nums) {
    let product = 1

    for (let i = 0; i < nums.length; i++) {
        product *= nums[i]
    }

    return product
}
