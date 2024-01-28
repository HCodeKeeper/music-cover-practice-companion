import {getTimeoutDurationPerBar} from "./timeout";
import MetronomeDefaultSoundPlayer from "./soundPlayers";

export default class Metronome{

    constructor(bpm, barsOfFour){
        this._bpm = bpm;
        this._rhythm = barsOfFour;
        this.__timeout = null;
        this.isPlaying = false;
        this._soundPlayer = new MetronomeDefaultSoundPlayer();
    }

    get bpm(){
        return this._bpm;
    }

    get rhythm(){
        return this._rhythm;
    }

    set bpm(value){
        this._bpm = value;
        this.updateTimeout();
    }

    set rhythm(value){
        this._rhythm = value;
        this.updateTimeout();
    }

    get soundPlayer(){
        return this._soundPlayer;
    }

    set soundPlayer(value){
        this._soundPlayer = value;
    }

    updateTimeout(){
        this.__timeout = getTimeoutDurationPerBar(this.bpm, this.rhythm);
    }

    async start() {
        if (this.isPlaying) return; // Prevent multiple start calls

        this.isPlaying = true;

        while (this.isPlaying) {
            await new Promise(resolve => setTimeout(resolve, this.__timeout));
            this.playSound();
        }
    }

    stop() {
        this.isPlaying = false;
        this.soundPlayer.reset();
    }

    playSound() {
        this.soundPlayer.play();
    }
}