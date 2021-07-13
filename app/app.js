import Vue from "nativescript-vue";
Vue.registerElement(
  "CardView",
  () => require("@nstudio/nativescript-cardview").CardView
);

import Home from "./components/Home";
import Login from "./components/Login";

new Vue({
  render: h => h("frame", [h(Login)])
}).$start();
