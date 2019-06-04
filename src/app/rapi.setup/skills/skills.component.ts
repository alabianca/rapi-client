import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public currentSkill: string = ""
  public skills: string[] = []

  constructor(private location: Location) { }

  ngOnInit() {
  }

  @HostListener('window:keyup.enter')
  public add() {
    if (!this.currentSkill) {
      return
    }

    this.skills.push(this.currentSkill);
    this.currentSkill = ""

  }

  public previous() {
    this.location.back()
  }

  public remove(index: number) {
    this.skills = [...this.skills.slice(0,index), ...this.skills.slice(index+1)]
  }

}
