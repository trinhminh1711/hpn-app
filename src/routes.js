import HomePage from './components/HomePage.vue'
import ExamPage from './components/exam/Index.vue'
import FormSugestion from './components/suggestion_box/Form.vue'
import Chart from "./components/exam/Charts.vue"
import Login from "./components/user/Login.vue"
import Test from "./components/suggestion_box/Test.vue"
export const routes = [
    { path: "/login", name: "user", component: Login },
    { path: "/", name: "Home", component: HomePage  },
    { path: "/exam", name: "exam", component: ExamPage },
    { path: "/rank-users", name: "Chart", component: Chart },
    { path: "/form-sugestion", name: "FormSugestion", component: FormSugestion },
    { path: "/test", name: "Test", component: Test },
];
