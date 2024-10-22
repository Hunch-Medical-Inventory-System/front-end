<script setup>
  import { ref } from "vue";
  import { supabase } from '@/lib/supabaseClient'

  const showPassword = ref(false)
  const firstName = ref("")
  const lastName = ref("")
  const email = ref("")
  const password = ref("")
  const errorMessage = ref("")

  const emailRules = [
    v => !!v || 'E-mail is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
  ]

  const passwordRules = [
    v => !!v || 'Password is required',
    v => (v && v.length >= 8) || 'Password must be less than 8 characters'
  ]

  const firstNameRules = [
    v => !!v || 'First name is required',
  ]

  const lastNameRules = [
    v => !!v || 'Last name is required',
  ]

  const signUpWithEmail = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,

    })

    if (error) {
      errorMessage.value = error
    }
  }

</script>

<template>
  <v-container >
    <v-card class="pa-5 w-50">
      <v-container class="justify-center text-center">
        <v-card-title>Demo Sign Up</v-card-title>
        <v-card-subtitle>test@example.com</v-card-subtitle>
        <v-card-subtitle>password</v-card-subtitle>
        <v-divider/>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <v-container>
          <form @submit.prevent="login">
            <v-row class="my-5">
                <v-text-field
                clearable
                label="First Name"
                hint="Enter your first name to access this website"
                v-model="firstName"
                required
                :rules="firstNameRules"
              />
            </v-row>
            <v-row class="my-5">
              <v-text-field
                clearable
                label="Last Name"
                hint="Enter your last name to access this website"
                v-model="lastName"
                required
                :rules="lastNameRules"
              />
            </v-row>
            <v-row class="my-5">
                <v-text-field
                clearable
                label="Email address"
                hint="Enter your email to access this website"
                v-model="email"
                required
                :rules="emailRules"
                type="email"
              />
            </v-row>
            <v-row class="my-5">
              <v-text-field
                clearable
                label="Password"
                hint="Enter your password to access this website"
                v-model="password"
                required
                :rules="passwordRules"
                :type="showPassword ? 'text' : 'password'"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
              />
            </v-row>
            <v-row>
              <v-btn class="button-styles" @click="signUpWithEmail">Sign Up</v-btn>
            </v-row>
          </form>
        </v-container>
      </v-container>
    </v-card>
  </v-container>
</template>


<style scoped>

.button-styles {
  border: 1px solid transparent;
  transition: all 1s ease;
}

.button-styles:hover {
  border: 1px solid transparent;
  border-image: linear-gradient(to right, hwb(198 2% 10%), hwb(228 7% 20%)) 1;
}

</style>
