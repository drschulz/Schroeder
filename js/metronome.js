function Metronome() {
  this.metronomeInterval = undefined;
  
  var that = this;
  this.playBeat = function() {
    document.getElementById("metronome").play();
  
  };
}

Metronome.prototype.play = function(tempo) {
  this.metronomeInterval = setInterval(this.playBeat, tempo * 1000 << 0);
};

Metronome.prototype.stop = function() {
  clearInterval(this.metronomeInterval);
};