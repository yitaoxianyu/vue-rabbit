import Sku from './XtxSku/index.vue'
import ImageView from './ImageView.vue'

export const registerPlugin = {
  install(app) {
    app.component('XtxSku',Sku)
    app.component('XtxImageView',ImageView)
  }
}