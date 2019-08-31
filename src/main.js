import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons"; // fas
import {} from "@fortawesome/free-regular-svg-icons"; // far
import {
  faTwitter,
  faFacebookSquare,
  faGooglePlusG,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"; // fab
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

library.add(faHeart, faPlay); // fas
library.add(); // far
library.add(faTwitter, faGooglePlusG, faInstagram, faFacebookSquare); // fab

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
