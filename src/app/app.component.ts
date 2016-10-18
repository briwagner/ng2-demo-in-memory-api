import { Component, OnInit } from '@angular/core';
import { GetMainMenuService } from './services/get-main-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  main_menu;

  constructor(private getmainmenu: GetMainMenuService) {}

  ngOnInit() {
    this.getmainmenu.fetchMenu()
                    .subscribe(
                      p => this.main_menu = p,
                      e => console.log(e),
                      // () => console.log('menu complete')
                    );
  }
}
