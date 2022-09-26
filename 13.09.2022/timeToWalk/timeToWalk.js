function timeToWalk(steps, stepLength, speed) {

    let distanceInMetres = (steps * stepLength);
    let speedInMetres = speed / 3.6;
    let time = distanceInMetres / speedInMetres;
    let addMinute = Math.floor(distanceInMetres / 500);
    let timeInMin = Math.floor(time / 60)
    let timeInSec = Math.ceil(time - (timeInMin * 60));
    let timeInHour = Math.floor(time / 3600);

    timeInMin += addMinute;
    timeInMin = timeInMin % 60;
    timeInHour += Math.floor(timeInMin / 60);

    let formatHour = timeInHour > 10 ? `${timeInHour}` : `0${timeInHour}`
    let formatMinutes = timeInMin > 10 ? `${timeInMin}` : `0${timeInMin}`
    let formatSeconds = timeInSec > 10 ? `${timeInSec}` : `0${timeInSec}`

    console.log(`${formatHour}:${formatMinutes}:${formatSeconds}`);

}
timeToWalk(9000, 0.60, 5)