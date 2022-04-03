<template>
  <form>
    <h1>Inscription</h1>
    <p>Vous avez déjà un compte ?
      <router-link to="login" class="link">Se connecter</router-link>
    </p>

    <div class="group">
      <InputText type="text" class="p-inputtext-lg" v-model="username" placeholder="Username"/>
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

export default {
  components: {
    InputText,
    Button,
    Password
  },
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    async signUp(e) {
      e.preventDefault();

      try {
        const res = await this.axios.post('http://localhost:3000/users/register',
            {
              username: this.username,
              password: this.password
            });
        console.log(res);
        if (res.status === 200) {
          //TODO: rediriger vers le dashboard
          await this.$router.push('/market')
        }
      } catch (err) {
        console.error(err);
      }

      //reset des champs
      this.username = null
      this.password = null
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