<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>{{user}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  user: User = {} as User;

  mounted() {
    this.$apiClient.getBase().then((v) => {
      this.user = v;
    })
  }
}
</script>
