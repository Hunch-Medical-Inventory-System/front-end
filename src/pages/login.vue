
<template>
  <div class="container">
    <div class="box">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        if (this.email === 'test@example.com' && this.password === 'password') {
          this.$router.push('/profile');
        } else {
          this.errorMessage = 'Invalid credentials.';
        }
      }
    }
  }
};
</script>