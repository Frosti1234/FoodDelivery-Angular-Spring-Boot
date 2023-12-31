import { Component, HostBinding } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay'
const THEME_DARKNESS_SUFFIX = `-dark`
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FoodDelivery';

  @HostBinding('class') activeThemeCssClass: string
  isThemeDark = false
  activeTheme: string

  constructor(private overlayContainer: OverlayContainer) {
      this.setActiveTheme('orange-grey',/*dark-mode:*/ true)
  }

  setActiveTheme(theme: string, darkness: boolean = null) {
      if (darkness === null)
          darkness = this.isThemeDark
      else if (this.isThemeDark === darkness) {
          if (this.activeTheme === theme) return
      } else
          this.isThemeDark = darkness

      this.activeTheme = theme

      const cssClass = darkness === true ? theme + THEME_DARKNESS_SUFFIX : theme

      const classList = this.overlayContainer.getContainerElement().classList
      if (classList.contains(this.activeThemeCssClass))
          classList.replace(this.activeThemeCssClass, cssClass)
      else
          classList.add(cssClass)

      this.activeThemeCssClass = cssClass
  }

  toggleDarkness() {
      this.setActiveTheme(this.activeTheme, !this.isThemeDark)
  }
}
