import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
   missionName = "LaunchCode Moonshot"
 
   candidates = [
    {name: 'Rusty Rutabaga', data: {age: 5, mass: '0.75 kg', sidekick: 'Blake'}, image: 'assets/images/Blake.png'},
    {name: 'Tessa Tortoise', data: {age: 126, mass: '113 kg', sidekick: 'Sally'}, image: 'assets/images/Sally.png'},
    {name: 'Bernie Beagle', data: {age: 4, mass: '15 kg', sidekick: 'Paul'}, image: 'assets/images/Paul.png'},
    {name: 'Jackalope', data: {age: 45, mass: '33 kg', sidekick: 'Chris'}, image: 'assets/images/Chris.png'},
    {name: 'Champ', data: {age: 9, mass: '36 kg', sidekick: 'Carly'}, image: 'assets/images/Carly.png'}
  ];

  crew = [];
  // takes a candidate and adds them to the crew array
  addToCrew(candidate: object) {
    // if the candidate is not already in the crew array,
    // then add that candidate into the crew array
    // if the crew array includes the candidate
    // don't push the candidate
    if (!this.crew.includes(candidate)) {
      this.crew.push(candidate);
    }
    console.log(this.crew);
  }

  checkSendMissionBtn(candidate: object): boolean {
    const isCandidateDefined = candidate !== undefined;
    const isCandidateNotInCrew = !this.crew.includes(candidate);
    const isCrewFull = this.crew.length < 3;
    return isCandidateDefined && isCandidateNotInCrew && isCrewFull;
  }

  constructor() { }

  ngOnInit() {
  }

  // Code the addToCrew function here:


  // BONUS: Code the changeMissionName function here:


}
