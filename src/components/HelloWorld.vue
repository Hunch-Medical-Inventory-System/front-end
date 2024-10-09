
<template>
  <v-container>
    <!-- <v-row justify="center"> -->
      <v-row>
        <v-img
          src="/home/soap/front-end-1/src/components/name.png"
          height="700px"
          class="mb-4"
        ></v-img>
      </v-row>
      <!-- <v-col cols="12" sm="8" md="6"> -->
        <!-- Large Image -->
        
      <v-row class="text-center justify-center">
        <v-btn class="button-styles" size="x-large" to="/login">Demo Login</v-btn>
        <v-btn class="button-styles" size="x-large" to="/profile">Demo Profile</v-btn>
      </v-row>
      <!-- </v-col> -->
    <!-- </v-row> -->
  </v-container>
</template>

<style scoped>
.my-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


<style>

    h1 {
        background: linear-gradient(to right, #ffffff, hwb(0 100% 0%));
         background-clip: text;
        color: transparent;
        font-size: 5rem;
        text-align: center;
        transition: all 0.4s ease;
    }

    .button-styles {
        padding: 21px 28px;
        font-size: 20px;
        border: none;
        border-radius: 10px;
        background-color: #000000c5; 
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        margin: 10px;
    }
    
    .button-styles:hover {
        background-color: hsla(0, 0%, 3%, 0.349);
        border: 2px solid transparent;
        background-clip: padding-box;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        border-image: linear-gradient(to right, hwb(198 2% 10%), hwb(228 7% 20%)) 1;
        transform: scale(1.05);
    }
</style>