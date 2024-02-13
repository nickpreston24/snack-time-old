import Alpine from "@alpinejs";
import persist from "@alpinejs/persist/dist";

/** Our function comes before Alpine.start() */
function myData() {
  return {
    greeting: Alpine.$persist("hello world"),
  };
}

window.myData = myData;
window.Alpine = Alpine;
Alpine.plugin(persist);
Alpine.start();
