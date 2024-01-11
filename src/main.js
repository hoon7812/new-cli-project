import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");

// main.js에서 App.vue 컴포넌트로 Vue 앱을 생성합니다.
// main.js 라우터(router), 상태관리(vuex), 믹스인(mixins), 전역 모듈 등을 로드합니다.
// App.vue 에서 내비게이션 처리 및 라우터에 해당하는 컴포넌트를 실행합니다.
// App.vue 컴포넌트가 public/index.html의 html 요소 중에 id가 "app"인 요소에 마운트 됩니다.
