import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { MachineQueryParams} from '../../model/machine'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  myForm: FormGroup
  showTable: boolean = false
  formattedParams : MachineQueryParams = {}
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      customer: null,
      drainSensorOn: null,
      pump5On: null,
      pump10On: null,
      waterTemp:null,
      waterLevel:null,
      waterTempOp:null,
      waterLevelOp:null,
    })
  }

  resetForm(): void {
    this.myForm.reset();
    this.showTable = false
  }

  submitForm(): void {
    let temp = {
      customer: this.myForm.value.customer,
      drainSensorOn: this.myForm.value.drainSensorOn,
      pump5On: this.myForm.value.pump5On,
      pump10On: this.myForm.value.pump10On,
      waterTemp: null,
      waterLevel: null,
    }

    if (this.myForm.value.waterTemp && this.myForm.value.waterTempOp) {
      temp.waterTemp = {}
      temp.waterTemp[this.myForm.value.waterTempOp] = this.myForm.value.waterTemp
    }

    if (this.myForm.value.waterLevel && this.myForm.value.waterLevelOp) {
      temp.waterLevel[this.myForm.value.waterLevelOp] = this.myForm.value.waterLevel
    }

    this.formattedParams = temp
    this.showTable = true
  }

  ngOnChanges() {
    console.log('parent changes');
  }

}
