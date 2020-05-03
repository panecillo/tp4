<template lang="html">

  <section class="src-components-usuarios my-3">
    <h3>Lista de Usuarios Registrados</h3>
    <hr>

    <div class="jumbotron mt-3">
      <button class="btn btn-primary m-3" @click="getAxios()">Actualizar lista de Usuarios</button>
      <button class="btn btn-success m-3" @click="agregarRandom()">Agrega un Usuario random</button>
      <button class="btn btn-danger m-3" @click="borrando()">Limpiar lista de Usuarios</button>
      <div v-if="borrandoLista">  
        <div v-for="(usuario, id) in usuarios" :key="id">
          {{deleteUsuarioAxios(usuario.id)}}
        </div>
          {{borrando()}}
      </div>
      <p v-if="usuarios.length">
        <table class="table">
          <tr class="bg.success text-black">
            <th>Nº</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
          <tr class="bg-info text-black" v-for="(usuario, index) in usuarios" :key="index">
            <th>{{ usuario.id }}</th>
            <th>{{ usuario.nombre }}</th>
            <th>{{ usuario.edad }}</th>
            <th>{{ usuario.email }}</th>
          </tr>
        </table>
      </p>
      <p v-else class="alert alert-danger">No hay usuarios suscriptos</p>
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
        url: 'https://5eade7584350860016e13bab.mockapi.io/usuarios/',
        usuarios: [],
        borrandoLista: false
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
      agregarRandom() {
        let post = []
        axios.post(this.url, post, {
          'content-type' : 'application/json'
        })
        this.getAxios()
      },
      limpiarLista() {
        this.usuarios = []
      },
      deleteUsuarioAxios(id) {
        axios.delete(this.url+id)
        .then( res => {
          console.log(res.data);
          this.getAxios();
        })
      },
        borrando() {
        this.borrandoLista = !this.borrandoLista
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
  h3 {
    font-size: 22px;
    text-align:center;
  }
</style>
