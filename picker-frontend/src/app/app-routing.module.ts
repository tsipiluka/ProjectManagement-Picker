import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrumInfoComponent } from './pages/scrum-info/scrum-info.component';
import { PickerComponent } from './pages/picker/picker.component';

const routes: Routes = [
  { path: 'scrum', component: ScrumInfoComponent },
  { path: '', component: PickerComponent },
  { path: '**', component: PickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
