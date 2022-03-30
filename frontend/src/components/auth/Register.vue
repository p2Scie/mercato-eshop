<template>
  <form>
    <h1>Inscription</h1>
    <p>Vous avez déjà un compte ?
      <router-link to="login" class="link">Se connecter</router-link>
    </p>

    <div class="group">
      <div style="display: flex; column-gap: 1rem">
        <InputText type="text" class="p-inputtext-lg" v-model="firstName" placeholder="Prénom"/>
        <InputText type="text" class="p-inputtext-lg" v-model="lastName" placeholder="Nom"/>
      </div>
      <InputText type="email" class="p-inputtext-lg" v-model="email" placeholder="Adresse email"/>
      <div>
        <Password v-model="password" toggleMask placeholder="Mot de passe" class="p-inputtext-lg"/>
      </div>
    </div>

    <Button label="S'inscrire" class="p-button-lg" @click="signUp"/>
  </form>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import { supabase } from "@/database/supabase";

export default {
  components: {
    InputText,
    Button,
    Password
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    }
  },
  methods: {
    async signUp() {
      const { user, session, error } = await supabase.auth.signUp(
          {
            email: this.email,
            password: this.password,
          },
          {
            data: {
              first_name: this.firstName,
              last_name: this.lastName,
            }
          }
      )

      if(error) {
        console.log(error)
      }
      console.log(session, user)
    }
  }
}
</script>

<style scoped>

.link {
  color: dodgerblue;
}

form {
  text-align: center;
}

.group {
  margin: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  display: block;
  width: 100%;
}

.p-password {
  width: 100%;
}

::v-deep(.p-password input) {
  width: 100%;
}

</style>