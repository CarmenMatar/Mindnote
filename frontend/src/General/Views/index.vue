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
    <p class="h5">Your personal notebook for your thoughts, and a chance to relate with others on specific ideas.</p>
  </div>
  <div class="container-fluid p-5">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </div>
  <div class="container-fluid text-center mt-5">
    <h4>Users Daily Posts</h4><br>
  </div>
  <div class="container-fluid p-5">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </div>
  <div>
    <b-overlay>
      <LoginVue v-if="userlogin"></LoginVue>
    </b-overlay>
  </div>
  </div>
</template>
<script>
import LoginVue from '../components/Login.vue'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userlogin: false
    }
  },
  components: {
    LoginVue
  },
  methods: {
    open_login () {
      this.userlogin = true
    },
    open_register () {
      this.userlogin = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
