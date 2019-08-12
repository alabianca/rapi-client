import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common'
import { CVService } from 'src/app/rapi.common/services/cv.service';
import { AuthService } from 'src/app/rapi.auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public currentSkill: string = ""
  public skills: string[] = []

  constructor(private location: Location, private cv: CVService, private authService: AuthService, private router: Router) {
    this.skills = this.cv.getSkills()
  }

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

  public submit() {
    const userId = this.authService.getUserId();
    this.cv.setSkills(this.skills);
    this.cv.submit(userId).subscribe((res) => {
      this.router.navigate(['/', 'home', 'dashboard']);
    })
  }

  public remove(index: number) {
    this.skills = [...this.skills.slice(0,index), ...this.skills.slice(index+1)]
  }

}
