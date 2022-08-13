import DefaultTheme from 'vitepress/theme'
import './site.css'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    // app.component('MyGlobalComponent', /* ... */)
  }
}