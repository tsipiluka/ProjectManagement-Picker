import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//primeng
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { QuestionBlockComponent } from './components/question-block/question-block.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressBarModule } from 'primeng/progressbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { ScrumInfoComponent } from './pages/scrum-info/scrum-info.component';
import { PickerComponent } from './pages/picker/picker.component';
import { KanbanInfoComponent } from './pages/kanban-info/kanban-info.component';
import { WaterfallInfoComponent } from './pages/waterfall-info/waterfall-info.component';
import { VmodelInfoComponent } from './pages/vmodel-info/vmodel-info.component';
import { SpiralmodelInfoComponent } from './pages/spiralmodel-info/spiralmodel-info.component';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [AppComponent, NavbarComponent, QuestionBlockComponent, ScrumInfoComponent, PickerComponent, KanbanInfoComponent, WaterfallInfoComponent, VmodelInfoComponent, SpiralmodelInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    DividerModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    CarouselModule,
    InputNumberModule,
    RadioButtonModule,
    FormsModule,
    CheckboxModule,
    ProgressBarModule,
    ConfirmDialogModule,
    PanelModule,
    TagModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
