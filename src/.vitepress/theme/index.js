import DefaultTheme from 'vitepress/theme'
import './site.scss'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    // app.component('MyGlobalComponent', /* ... */)
  }
}