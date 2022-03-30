<template>
  <Menubar :model="items">

    <template #end>
      <Button
          label="" icon="pi pi-shopping-bag"
          class="p-button-rounded p-button-text p-button-lg"
          style="margin-right: .5rem"/>

      <Button
          v-if="isAuthenticated"
          label=""
          @click="toggle"
          icon="pi pi-bell"
          class="p-button-rounded p-button-text p-button-lg"
          style="margin-right: .5rem"/>

      <OverlayPanel ref="notif">
        <p>Rien à signalé</p>
      </OverlayPanel>

      <router-link to="/user/1" v-if="isAuthenticated">
        <Button
            label=""
            icon="pi pi-user"
            class="p-button-rounded p-button-text p-button-lg"/>
      </router-link>

      <router-link to="/auth" v-if="!isAuthenticated">
        <Button type="button" label="Se Connecter" style="margin-left: 2rem"/>
      </router-link>

    </template>

  </Menubar>


</template>

<script>
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';

export default {

  //TODO: trouver un moyen de masquer les autre menu sauf le marché des transfer lorsque l'on est pas connecté
  components: {
    Menubar,
    Button,
    OverlayPanel
  },
  data() {
    return {
      items: [
        {
          label: 'Accueil',
          icon: 'pi pi-fw pi-home',
          to: '/',
          visible: () => this.$store.state.isAuthenticated
        },
        {
          label: 'Mon équipe',
          icon: 'pi pi-fw pi-star-fill',
          to: '/team',
          visible: () => this.$store.state.isAuthenticated
        },
        {
          label: 'Marché des transferts',
          icon: 'pi pi-fw pi-sort-alt',
          to: '/market'
        }
      ]
    }
  },
  methods: {
    toggle(event) {
      this.$refs.notif.toggle(event);
    }
  },
  computed: {
    isAuthenticated() {
        return this.$store.state.isAuthenticated;
    }
  }
}
</script>

<style scoped>
.p-menubar {
  background-color: #FFF;
  border-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
}
</style>