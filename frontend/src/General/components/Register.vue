<template>
    <!-- register -->
    <div class="page-holder align-items-center py-4 bg-gray-100 vh-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 px-lg-4">
            <div class="card">
              <div class="card-header px-lg-5">
                <div class="card-heading text-primary">User Register</div>
              </div>
              <div class="card-body p-lg-5">
                <h3 class="mb-4">Get started with Mindnote</h3>
                <form>
                  <div class="form-floating mb-3">
                    <input class="form-control" id="username" type="email" placeholder="name@example.com" required>
                    <label for="username">Username</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input class="form-control" id="floatingInput" type="email" placeholder="name@example.com" required>
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input class="form-control" id="floatingPassword" type="password" placeholder="Password" required>
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" name="agree" id="agree">
                    <label class="form-check-label" for="agree">I agree with the <a href="#">Terms & Conditions</a>.</label>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary" id="register" type="button" name="registerSubmit" @click="validateRegister">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
            <div class="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"><img class="img-fluid mb-4" width="300" src="https://therichpost.com/wp-content/uploads/2021/06/login_page_image.png" alt="" style="transform: rotate(10deg)">
            <h1 class="mb-4">Mindote <br class="d-none d-lg-inline">Your on demand friend.</h1>
          </div>
          </div>
          </div>
          </div>
</template>
<script>
export default{
  name: 'register',
  data () {
    return {
      title: 'Register'
    }
  },
  methods: {
    validateRegister () {
      console.log('test')
      this.$router.push('mainDash')
    }
  }
}
</script>

<style scoped>

</style>
