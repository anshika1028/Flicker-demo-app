import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule {  static forRoot(): ModuleWithProviders {
  return {
    ngModule: SharedModule,
  };
}
}
