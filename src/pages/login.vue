<template>
  <v-container class="o-container">
    <div class="form-wrapper">
      <h2 class="login-title">Demo Login</h2>
      <h3>test@example.com</h3>
      <h3>password</h3>
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
.o-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}


.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: hsl(0, 0%, 11%);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}


.input-container {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: large;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: none;
  outline: none;
  transition: border-color 0.3s ease;
}


.input-container:focus {
  box-shadow: 0px 4px 10px hsla(0, 0%, 100%, 0.815);
}



.login-title {
  align-self: flex-start;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}



.button-styles {
  width: 100%;
  padding: 10px;
  border: 1px solid transparent;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
}


.button-styles:hover {
  background-color: hwb(211 18% 39% / 0);
  border: 2px solid transparent;
  border-image: linear-gradient(to right, hwb(198 2% 10%), hwb(228 7% 20%)) 1;
  transform: scale(1.05);
}



.error {
  color: #e47b7b;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}



@media (max-width: 768px) {
  .form-wrapper {
    padding: 15px;
  }


  .input-container,
  .button-styles {
    font-size: 16px;
  }
}


@media (max-width: 480px) {
  .login-title {
    font-size: 20px;
  }


  .input-container,
  .button-styles {
    font-size: 14px;
  }
}
</style>
