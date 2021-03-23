// Write your solution in this file!
//define driver varible and assign an object
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, { [key]: value });
}

//should mutate
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key, value){
    const newObject = Object.assign({}, driver) // clone
    delete newObject[key] // delete
    return newObject // return object
}

//should mutate
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}

