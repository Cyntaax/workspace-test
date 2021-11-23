import {apiClient} from "expl-api-client"
import Vue from "vue";

Vue.prototype.$apiClient = apiClient;

declare module "vue/types/vue" {
    interface Vue {
        $apiClient: typeof apiClient;
    }
}
