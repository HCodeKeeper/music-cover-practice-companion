const rhythmTimingByFourPerBarModifier = 60; // 1/4 rhythm in ms

export function timeout(bars, bpm, rhythmOfFour){
    return new Promise((resolve, reject) => {
        if (bars > 0) {
            const durationInSeconds = getTimeoutDurationPerBar(bpm, rhythmOfFour) * bars;
            setTimeout(() => {
                console.log(durationInSeconds);
                resolve(durationInSeconds); // Resolve the promise after timeout
            }, durationInSeconds);
        } else {
            reject(new Error('Invalid bars value')); // Reject the promise if bars is not positive
        }
    });
}

export function getTimeoutDurationPerBar(bpm, rhythmOfFour){
    let durationPerBeatInSeconds = (rhythmTimingByFourPerBarModifier / bpm) * (4 / rhythmOfFour) * 1000;
    return durationPerBeatInSeconds;
}