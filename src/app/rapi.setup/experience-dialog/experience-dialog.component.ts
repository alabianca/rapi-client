import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Experience, DEFAULT_EXPERIENCE } from 'src/app/rapi.common/models/experience';

@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.css']
})
export class ExperienceDialogComponent implements OnInit {
  public experienceForm: FormGroup
  public experience: Experience;
  public accomplishments = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Experience,
    public dialogRef: MatDialogRef<ExperienceDialogComponent>,
    ) {
      this.experience = this.setupDefaults(data)
      this.experienceForm = this.createForm()
  }

  ngOnInit() {
  }

  public onToggle($event) {
    this.experience.current = $event;
  }

  public save() {

    if (!this.experienceForm.valid) {
      this.dialogRef.close(null);
      return
    }

    const exp: Experience = {
      company: this.experienceForm.controls.company.value,
      title: this.experienceForm.controls.title.value,
      startDate: this.experienceForm.controls.startDate.value,
      endDate: this.experienceForm.controls.endDate.value,
      accomplishments: this.decodeAccomplishments(this.experienceForm.controls.accomplishments.value),
      current: this.experience.current,
    }

    this.dialogRef.close(exp)
  }

  public parseAccomplishments(accs: string[]): string {
    return  '*' + accs.join('\n*')
  }

  public decodeAccomplishments(str: string): string[] {
    const accs = []

    for (let acc of str.split('*')) {
      acc = acc.trim();

      if (acc) {
        accs.push(acc);
      }
    }

    return accs;

  }

  private setupDefaults(data: Experience): Experience {
    return {...DEFAULT_EXPERIENCE, ...data};
  }


  private createForm(): FormGroup {
    return new FormGroup({
      company: new FormControl(this.experience.company, [Validators.required]),
      title: new FormControl(this.experience.title, [Validators.required]),
      startDate: new FormControl(this.experience.startDate, [Validators.required]),
      endDate: new FormControl(this.experience.endDate),
      accomplishments: new FormControl(this.parseAccomplishments(this.experience.accomplishments))
    })
  }

}
