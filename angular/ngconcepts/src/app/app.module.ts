import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
=======
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
>>>>>>> 2faef6c88dc244912e38e471d219dc790f34b2d4

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TemplateDrivenFormComponent
=======
    TemplatedrivenformComponent
>>>>>>> 2faef6c88dc244912e38e471d219dc790f34b2d4
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
