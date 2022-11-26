// Code your solution in this file!
function distanceFromHqInBlocks(blockNo){
    return Math.abs(blockNo-42);
}

function distanceFromHqInFeet(distance){
    return Math.abs(distanceFromHqInBlocks(distance)*264);
    return distance;
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start)*264)
}
function calculatesFarePrice(start, destination){
    let distance= distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0;
    }
    if (distance >= 400 && distance <= 2000){
        return 2.56;
    }
    if(distance > 2500) {
        return 'cannot travel that far';
    }
    else if(distance >= 2000){
        return 25;
    }
}