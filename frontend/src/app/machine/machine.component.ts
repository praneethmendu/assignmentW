import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  form : FormGroup
  showSearch: boolean
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.fb.group({'idInput': ''})
    this.showSearch = this.router.url == '/machine'
    
    this.router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.showSearch = event.url == '/machine'
      }
    })

  }

  onSubmit(): void {
    this.router.navigate(['/machine', this.form.value.idInput])
  }

}
