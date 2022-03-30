<template>
  <div class="container">
    <Menu :model="items"/>
    <div class="form">
      <Card>
        <template #content>
          <router-view></router-view>
        </template>
      </Card>
    </div>
  </div>


</template>

<script>
import Menu from 'primevue/menu';
import Card from 'primevue/card';

export default {
  components: {
    Menu,
    Card
  },
  data() {
    return {
      items: [
        {
          label: 'Profil',
          icon: 'pi pi-user-edit',
          to: 'profile'
        },
        {
          label: "Liste de souhaits",
          icon: 'pi pi-heart',
          to: 'wishlist'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 4rem;
  }

  .form {
    flex: 0 1 auto;
    width: 520px;
  }
</style>