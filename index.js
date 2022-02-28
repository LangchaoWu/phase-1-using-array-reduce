const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
function reducer(accumulator, value){
    let totalBatteries =accumulator +value;
    return totalBatteries;

}
const totalBatteries=batteryBatches.reduce(reducer,0);

// Code your solution here
