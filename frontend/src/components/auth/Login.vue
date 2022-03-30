<template>
  <form>
    <h1>Bienvenue</h1>
    <p>Vous n'avez pas de compte ?
      <router-link to="register" class="link">Créez-en un maintenant !</router-link>
    </p>

    <div class="group">
      <InlineMessage v-if="error.length">
        {{ error[0] }}
      </InlineMessage>
      <InputText type="email" class="p-inputtext-lg" :class="error.length ? 'p-invalid' : '' " v-model="email" placeholder="Adresse email"/>
      <InputText type="password" class="p-inputtext-lg" v-model="password" :class="error.length ? 'p-invalid' : '' " placeholder="Mot de passe"/>
    </div>

    <Button label="Se connecter" class="p-button-lg" @click="logIn"/>
  </form>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { supabase } from "@/database/supabase";
import InlineMessage from 'primevue/inlinemessage';
import router from "@/router";

export default {

  //TODO: persister la connection du user
  //TODO: Ajouter un bouton de déconnection
  components: {
    InputText,
    Button,
    InlineMessage
  },
  data() {
    return {
      email: null,
      password: null,
      error: []
    }
  },
  methods: {
    async logIn() {
      //reset error array
      this.error = [];

      const { error } = await supabase.auth.signIn({
        email: this.email,
        password: this.password,
      })

      //reset input fields
      this.email = null
      this.password = null

      if(error) {
        this.error.push(error.message)
        throw error
      }

      this.$store.commit('isAuthenticated');
      await router.push('/');
      console.log(error);
    }
  }
}
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.link {
  color: dodgerblue;
}

h1, p {
  text-align: center;
}

.group {
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

input {
  display: block;
  width: 100%;
}
</style>