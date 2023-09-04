<template>
 <div class="index">
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Mindnote</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Login</b-button>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Sign Up</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
 </div>
</template>
<script>
import LoginVue from '../components/Login.vue'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    LoginVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
