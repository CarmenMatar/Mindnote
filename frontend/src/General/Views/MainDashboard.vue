<template>
  <div class="mainDash">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <div class="container-fluid">
    <b-navbar-brand align="Start">Mindnote</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="collapse navbar-collapse justify-content-end" align="end">
        <b-nav-item>
          <b-button size="sm" class="my-2 my-sm-0" variant="light" type="submit" @click="open_login">Personal Dashboard</b-button>
        </b-nav-item>
        <b-nav-item>
          <b-button size="sm" class="my-2 my-sm-0" variant="outline-dark" type="submit" @click="open_register">Community Dashboard</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </div>
    </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'mainDashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
