const rhythmTimingByFourPerBarModifier = 60; // 1/4 rhythm in ms

export function timeout(bars, bpm, rhythmOfFour){
    let durationInSeconds = 0;
    if(bars > 0){
        durationInSeconds = getTimeoutDurationPerBar(bpm, rhythmOfFour) * bars;

        setTimeout(() => {}, durationInSeconds);
    }
    return new Promise(resolve => durationInSeconds);
}

export function getTimeoutDurationPerBar(bpm, rhythmOfFour){
    let durationPerBeatInSeconds = (rhythmTimingByFourPerBarModifier / bpm) * (4 / rhythmOfFour) * 1000;
    return durationPerBeatInSeconds;
}