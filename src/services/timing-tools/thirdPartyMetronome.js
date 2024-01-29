import MetronomeDefaultSoundPlayer from "./soundPlayers";

class Metronome {
    constructor(bpm, timeSignature) {
        this.bpm = bpm;
        this.soundPlayer = new MetronomeDefaultSoundPlayer(1, timeSignature);
        this.timeSignature = timeSignature;
        this.isPlaying = false;
        this.noteCount = 0;
    }

    start() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.schedule();
        }
    }

    stop() {
        if (this.isPlaying) {
            this.isPlaying = false;
            clearTimeout(this.timer);
        }
    }

    schedule() {
        this.start = new Date();
        const interval = 60000 / this.bpm;
        this.timer = setTimeout(() => {
            this.soundPlayer.play(this.noteCount);
            console.log(this.noteCount);
            this.noteCount = (this.noteCount + 1) % this.timeSignature;
            console.log((new Date() - this.start) /1000);
            this.start = new Date();
            this.schedule();
        }, interval);
    }

    setVolume(volume=1){
        this.soundPlayer.setVolume(volume);
    }
}


export default Metronome;