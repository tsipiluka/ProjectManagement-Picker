import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrumInfoComponent } from './pages/scrum-info/scrum-info.component';
import { PickerComponent } from './pages/picker/picker.component';
import { KanbanInfoComponent } from './pages/kanban-info/kanban-info.component';
import { WaterfallInfoComponent } from './pages/waterfall-info/waterfall-info.component';
import { VmodelInfoComponent } from './pages/vmodel-info/vmodel-info.component';
import { SpiralmodelInfoComponent } from './pages/spiralmodel-info/spiralmodel-info.component';

const routes: Routes = [
  { path: 'scrum', component: ScrumInfoComponent },
  { path: 'kanban', component: KanbanInfoComponent },
  { path: 'waterfall', component: WaterfallInfoComponent },
  { path: 'v-model', component: VmodelInfoComponent },
  { path: 'spiral-model', component: SpiralmodelInfoComponent },
  { path: '', component: PickerComponent },
  { path: '**', component: PickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
