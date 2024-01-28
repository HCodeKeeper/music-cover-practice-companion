import firstBarSound from "../../assets/frst_bar.mp3";
import barSound from "../../assets/bar.mp3";

class SoundPlayer{
    constructor(){
        if (this.constructor == SoundPlayer){
            throw new Error('Not implemented');
        }
    }

    play(){
        throw new Error('Not implemented');
    }
}


class MetronomeDefaultSoundPlayer extends SoundPlayer {
    

    constructor(volume=1){
        super();
        this.firstBarSound = firstBarSound;
        this.barSound = barSound;
        this.firstBarAudio = new Audio(firstBarSound);
        this.barAudio = new Audio(barSound);
        this.setVolume(volume);
        this.playedCount = 0;
    }

    play(){
        if (!(this.playedCount % 4)){
            this.firstBarAudio.play();
        } else{
            this.barAudio.play();
        }
        this.playedCount++;
    }

    reset(){
        this.playedCount = 0;
    }

    setVolume(volume){
        this.firstBarAudio.volume = volume;
        this.barAudio.volume = volume;
    }
}


export default MetronomeDefaultSoundPlayer;
