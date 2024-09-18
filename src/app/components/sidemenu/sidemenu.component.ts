import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  userName: string = "Juan Faicán";
  theme: string = "";
  widthMenu: number = 50;
  visibleMenu: boolean = true;

  setVisibilitiBack(): void {
    this.visibleMenu = !this.visibleMenu;
    this.visibleMenu = false;
  }

  setVisibilitiMenu(): void {
    this.visibleMenu = !this.visibleMenu;
    this.visibleMenu = true;
  }

  themeColors = ['rgb(19, 90, 114)', 'rgb(255, 235, 59)', 'rgb(255, 229, 111)'];
  currentColorIndex = 0;
  setThemeColor(color: string): void {
    this.currentColorIndex = (this.currentColorIndex + 1) % this.themeColors.length;
    this.theme = this.themeColors[this.currentColorIndex]; 
}

  setSizeMenu(){
    this.widthMenu+=10;
    if(this.widthMenu>100){
      this.widthMenu=50;
  }
}
}