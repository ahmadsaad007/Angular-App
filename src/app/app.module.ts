import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuccessAlert } from './success-alert.component';
import { WarningAlert } from './warning-alert.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { FormControl} from '@angular/forms';
import { FormBuilder} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    WarningAlert
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
