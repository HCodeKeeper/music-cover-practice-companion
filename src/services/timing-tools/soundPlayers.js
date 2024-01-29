class MetronomeDefaultSoundPlayer {
    constructor(volume = 1, timeSignature = 4) {
        this.timeSignature = timeSignature;
        this.accentPitch = 380;
        this.offBeatPitch = 200;
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.volume = volume;
    }

    play(noteCount = 0) {
        const note = this.context.createOscillator();
        const gainNode = this.context.createGain();

        if (noteCount % this.timeSignature === 0) {
            note.frequency.value = this.accentPitch;
        } else {
            note.frequency.value = this.offBeatPitch;
        }

        note.connect(gainNode);
        gainNode.connect(this.context.destination);
        
        // Set volume
        gainNode.gain.value = this.volume;

        // Start and stop the oscillator
        note.start();
        note.stop(this.context.currentTime + 0.05);
    }

    setVolume(volume) {
        this.volume = volume;
    }
}

export default MetronomeDefaultSoundPlayer;
