<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td {{ user.name}}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
            
    </tbody>
  </table>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    props: ['users'],
    methods: {
     
    }
  }
</script>


