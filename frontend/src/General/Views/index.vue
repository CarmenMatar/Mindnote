<template>
 <div class="index">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <div class="container-fluid">
    <b-navbar-brand align="Start">Mindnote</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="collapse navbar-collapse justify-content-end" align="end">
        <b-nav-item>
          <b-button size="sm" class="my-2 my-sm-0" variant="light" type="submit" @click="open_login">Login</b-button>
        </b-nav-item>
        <b-nav-item>
          <b-button size="sm" class="my-2 my-sm-0" variant="outline-dark" type="submit" @click="open_register">Sign Up</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </div>
  </b-navbar>
  <div class="container-fluid text-center mt-5">
    <h2>Welcome to Mindnote !</h2><br>
    <p class="lead text-muted">Your personal notebook for your thoughts, and a chance to relate with others on specific ideas.</p>
  </div>
  <div>
    <LoginVue v-if="userlogin"></LoginVue>
    <RegisterVue v-if="userregister"></RegisterVue>
  </div>
  </div>
</template>
<script>
import LoginVue from '../components/Login.vue'
import RegisterVue from '../components/Register.vue'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userlogin: true,
      userregister: false
    }
  },
  components: {
    LoginVue,
    RegisterVue
  },
  methods: {
    open_login () {
      this.userlogin = true
      this.userregister = false
    },
    open_register () {
      this.userregister = true
      this.userlogin = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
