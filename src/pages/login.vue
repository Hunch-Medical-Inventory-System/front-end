<template>
  <v-container class="test-container">
    <div class="form-wrapper">
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="login">
        <v-container class="form-group">
          <label for="email">Email: </label>
          <input class="input-container" type="email" v-model="email" id="email" required />
        </v-container>
        <v-container class="form-group">
          <label for="password">Password: </label>
          <input class="input-container" type="password" v-model="password" id="password" required />
        </v-container>
        <v-btn class="button-styles" type="submit">Login</v-btn>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </v-container>
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


<style scoped>
.test-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}


.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
}

.input-container {
  background-color: hsl(189, 100%, 50%);
  border: 2px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  border-image: linear-gradient(to right, hwb(198 2% 10%), hwb(228 7% 20%)) 1;
}

.login-title {
  align-self: flex-start;
}


  .button-styles {
    border: 1px solid transparent;
    transition: all 1s ease;
  }

  .button-styles:hover {
    border: 1px solid transparent;
    border-image: linear-gradient(to right, hwb(198 2% 10%), hwb(228 7% 20%)) 1;
    transform: scale(1.1);
  }
</style>
