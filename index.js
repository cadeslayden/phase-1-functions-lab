function distanceFromHqInBlocks(number){
    if (number > 42){
        return (number - 42)
    }
    else {
        return (42 - number)
    }
}
function distanceFromHqInFeet(number){
    if (number > 42){
        return ((number - 42)*264)
    }
    else {
        return ((42 - number)*264)
    }
}
function distanceTravelledInFeet(number, number2){
    if (number > number2){
        return ((number - number2)*264)
    }
    else {
        return ((number2-number)*264)
    }
}
function calculatesFarePrice(start, destination){
    
    let totalDistance = distanceTravelledInFeet(start, destination)

    console.log(totalDistance)
    
    if (totalDistance < 400){
        return (0)
    } else if (400 < totalDistance && totalDistance < 2000){
        return ((totalDistance - 400)*0.02)
    } else if (2000 < totalDistance && totalDistance < 2500){
        return (25)
    } else {
        return ('cannot travel that far')
    }
    
}