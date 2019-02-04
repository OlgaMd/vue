<template>
  <router-link  v-bind="users" to="/users">Все пользователи</router-link>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        users: []
      }
    },  
    methods: {
     getUsers() {
         axios
      .get('http://localhost:3000/users')
      .then(response => (this.users = response.data))
      }
    },
    created() {
      
    },
    mounted () {
        this.getUsers()
    }
  }
</script>


