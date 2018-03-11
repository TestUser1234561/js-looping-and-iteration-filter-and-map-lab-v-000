// Code your solution here:
function driversWithRevenueOver(arr, amnt) {
  return arr.filter(driver => driver.revenue > amnt)
}

function driverNamesWithRevenueOver(arr, amnt) {
    return arr.filter(driver => driver.revenue > amnt).map(d => d.name)
}

function exactMatch(arr, value) {
  return arr.filter(driver => driver[Object.keys(value)[0]] == value[Object.keys(value)[0]])
}
