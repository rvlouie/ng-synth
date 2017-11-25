import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  private audioContext: AudioContext;
  private oscType: any;
  private filterType: any;

  oscFrequency = 1000;

  cutoffFrequency = 600;

  gain = 0.04;

  gainPercent = this.gain*1000;

  constructor() {

    //Ocsillator temp

    this.oscType = 'sawtooth'

    //Filter temp

    this.filterType = 'lowpass';

    //Gain temp



  };

  ngOnInit() {
    this.audioContext = new AudioContext();
  };

  playTest() {
  	let oscillator = this.audioContext.createOscillator();
  	let output = this.audioContext.destination;
  	let amp = this.audioContext.createGain();
  	let filter = this.audioContext.createBiquadFilter();

  	//Oscaillator temp

  	oscillator.type = this.oscType
  	oscillator.frequency.value = this.oscFrequency;
  	oscillator.connect(filter);
  	oscillator.start(0);
  	oscillator.stop(4);

  	//Filter temp

  	filter.frequency.value = this.cutoffFrequency;
  	filter.type = this.filterType;
  	filter.connect(amp);

  	//Gain temp

  	amp.connect(output);
  	amp.gain.value = this.gain;

  }

}
