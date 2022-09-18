function timeToWalk(steps, stepLength, speed) {
    let distance = (steps * stepLength);
    let addMinute = Math.floor(distance / 500);
    let time = ((distance / 1000) / speed);
    time *= 60;
    time += addMinute;
    time *= 60;



    console.log(time);



}
timeToWalk(4000, 0.60, 5)