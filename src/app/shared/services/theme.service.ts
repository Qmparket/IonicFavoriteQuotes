import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as Color from 'color';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    @Inject(DOCUMENT) private document: Document) { }

    // Override all global variables with a new theme
    setTheme(theme) {
      const cssText = CSSTextGenerator(theme);
      this.setGlobalCSS(cssText);
    }

    // Defube a subgke CSS variable
    setVariable(name, value) {
      this.document.documentElement.style.setProperty(name, value);
    }

    private setGlobalCSS(css: string) {
      this.document.documentElement.style.cssText = css;
    }
}

const defaults = {
  primary: '#3880ff',
  secondary: '#0cd1e8',
  tertiary: '#7044ff',
  success: '#10dc60',
  warning: '#ffce00',
  danger: '#f04141',
  dark: '#222428',
  medium: '#989aa2',
  light: '#f4f5f8'

};

function CSSTextGenerator(colors) {
  colors = {...defaults, ...colors};
  const {
    primary,
    secondary,
    tertiary,
    success,
    warning,
    danger,
    dark,
    medium,
    light
  } = colors;

  const shadeRatio = 0.1;
  const tintRatio = 0.1;
  return `
    --ion-color-base: ${light};
    --ion-color-contrast: ${dark};
    --ion-background-color: ${light};
    --ion-text-color: ${dark};
    --ion-toolbar-background-color: ${contrast(light, 0.1)};
    --ion-toolbar-text-color: ${contrast(dark, 0.1)};

    --ion-color-primary: ${primary};
    --ion-color-primary-rgb: 250,231,51;
    --ion-color-primary-contrast: ${contrast(primary)};
    --ion-color-primary-contrast-rgb: 0,0,0;
    --ion-color-primary-shade: ${Color(primary).darken(shadeRatio)};
    --ion-color-primary-tint: ${Color(primary).lighten(shadeRatio)};

    --ion-color-primary: ${secondary};
    --ion-color-primary-rgb: 250,231,51;
    --ion-color-primary-contrast: ${contrast(secondary)};
    --ion-color-primary-contrast-rgb: 0,0,0;
    --ion-color-primary-shade: ${Color(secondary).darken(shadeRatio)};
    --ion-color-primary-tint: ${Color(secondary).lighten(shadeRatio)};

    --ion-color-primary: ${tertiary};
    --ion-color-primary-rgb: 250,231,51;
    --ion-color-primary-contrast: ${contrast(tertiary)};
    --ion-color-primary-contrast-rgb: 0,0,0;
    --ion-color-primary-shade: ${Color(tertiary).darken(shadeRatio)};
    --ion-color-primary-tint: ${Color(tertiary).lighten(shadeRatio)};

    --ion-color-primary: ${success};
    --ion-color-primary-rgb: 250,231,51;
    --ion-color-primary-contrast: ${contrast(success)};
    --ion-color-primary-contrast-rgb: 0,0,0;
    --ion-color-primary-shade: ${Color(success).darken(shadeRatio)};
    --ion-color-primary-tint: ${Color(success).lighten(shadeRatio)};

    --ion-color-primary: ${warning};
    --ion-color-primary-rgb: 250,231,51;
    --ion-color-primary-contrast: ${contrast(warning)};
    --ion-color-primary-contrast-rgb: 0,0,0;
    --ion-color-primary-shade: ${Color(warning).darken(shadeRatio)};
    --ion-color-primary-tint: ${Color(warning).lighten(shadeRatio)};

    --ion-color-primary: ${danger};
    --ion-color-primary-rgb: 250,231,51;
    --ion-color-primary-contrast: ${contrast(danger)};
    --ion-color-primary-contrast-rgb: 0,0,0;
    --ion-color-primary-shade: ${Color(danger).darken(shadeRatio)};
    --ion-color-primary-tint: ${Color(danger).lighten(shadeRatio)};

    --ion-color-primary: ${dark};
    --ion-color-primary-rgb: 250,231,51;
    --ion-color-primary-contrast: ${contrast(dark)};
    --ion-color-primary-contrast-rgb: 0,0,0;
    --ion-color-primary-shade: ${Color(dark).darken(shadeRatio)};
    --ion-color-primary-tint: ${Color(dark).lighten(shadeRatio)};

    --ion-color-primary: ${medium};
    --ion-color-primary-rgb: 250,231,51;
    --ion-color-primary-contrast: ${contrast(medium)};
    --ion-color-primary-contrast-rgb: 0,0,0;
    --ion-color-primary-shade: ${Color(medium).darken(shadeRatio)};
    --ion-color-primary-tint: ${Color(medium).lighten(shadeRatio)};

    --ion-color-primary: ${light};
    --ion-color-primary-rgb: 250,231,51;
    --ion-color-primary-contrast: ${contrast(light)};
    --ion-color-primary-contrast-rgb: 0,0,0;
    --ion-color-primary-shade: ${Color(light).darken(shadeRatio)};
    --ion-color-primary-tint: ${Color(light).lighten(shadeRatio)};
  `;
}
function contrast(color, ratio = 0.8) {
  color = Color(color);
  return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
}


