<template lang="html">

  <section class="src-components-usuarios my-3">
    <h3>Lista de Usuarios Registrados</h3>
    <hr>

    <div class="jumbotron mt-3">
      <button class="btn btn-success my-3" @click="getAxios()">Actualizar lista de Usuarios</button>
      <p v-if="hayUsuarios">
        <table class="table">
          <tr class="bg.success text-black">
            <th>Nº</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
          <tr class="bg-info text-black" :v-for="(usuario, id) in usuarios">
            <th>{{ usuario.id }}</th>
            <th>{{ usuario.nombre }}</th>
            <th>{{ usuario.edad }}</th>
            <th>{{ usuario.email }}</th>
          </tr>
        </table>
        <pre>{{hayUsuarios}}</pre>
        <pre>{{usuarios}}</pre>
        
      </p>
    </div>
  </section>

</template>

<script lang="js">

  import axios from 'axios'

  export default  {
    name: 'src-components-usuarios',
    props: [],
    mounted () {
      axios.get(this.url)
      .then( res => {
        console.log(res.data)
        this.usuarios = res.data
      })
    },
    data () {
      return {
        url: 'https://5eade7584350860016e13bab.mockapi.io/usuarios',
        usuarios: []
      }
    },
    methods: {
      getAxios() {
        axios.get(this.url)
        .then( res => {
          console.log(res.data)
          this.usuarios = res.data
        })
      },
      postAxios() {
        let post = {
          nombre: 'Juan',
          edad: 32,
          email: 'yo@yo.com'
        }
        axios.post(this.url, post, {
          'content-type' : 'application/json'
        })
        .then( res => {
        console.log(res.data)
        })
      },
      hayUsuarios() {
        return this.getAxios().length() > 0
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-usuarios {

  }
  .table {
    background-color: lightblue;
  }
</style>
