import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `

    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
    </div>
    <img class="logo" src="assets/images/engineering.png" alt="" style="float:right" width="100" height="25">
  `,
})
export class FooterComponent {
  /*
      <span class="created-by">
      Created with ♥ by <b><a href="https://akveo.page.link/8V2f" target="_blank">Akveo</a></b> 2019
    </span>
  */
}
