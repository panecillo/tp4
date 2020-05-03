<template lang="html">

  <section class="src-components-formulario my-3">
    <h3>Formulario de Suscripción</h3>
    <hr>

    <vue-form :state= "formState" @submit.prevent="enviar()">
      
      <br>
      <validate tag="div">  
        <label class="label" for="nombre">Nombre</label>
        <input 
          type="text"
          id="nombre"
          class="form-control"
          autocomplete="off"
          name="nombre"
          v-model.trim= "formData.nombre"
          required
          :minlength="caracterMin"
          :maxlength="caracterMax"
          no-espacios
        >

        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger my-1">Campo Nombre requerido</div>
          <div slot="minlength" class="alert alert-danger my-1">El nombre debe tener entre {{caracterMin}} y {{caracterMax}} caracteres</div>
          <div slot="no-espacios" class="alert alert-danger my-1">No debe contener espacios intermedios</div>
        </field-messages>
      </validate>      
      <br>
      <validate tag="div">
        <label class="label"  for="edad">Edad</label>
        <input 
          type="number"
          id="edad"
          class="form-control"
          autocomplete="off"
          name="edad"
          v-model.number= "formData.edad"
          required
          :min="edadMin"
          :max="edadMax"
        >
        <field-messages name="edad" show="$dirty">
          <div slot="min" class="alert alert-danger my-1">La edad mínima es de {{edadMin}} años</div>
          <div slot="max" class="alert alert-danger my-1">La edad máxima es de {{edadMax}} años</div>
          <div slot="required" class="alert alert-danger my-1">Campo Edad requerido</div>
        </field-messages>
      </validate>
      <br>
      <validate tag="div">
        <label class="label"  for="email">Email</label>
        <input 
          type="email"
          id="email"
          class="form-control"
          autocomplete="off"
          name="email"
          v-model= "formData.email"
          required
        >
      </validate>
      <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit" @click="postAxios()">Enviar</button>
    </vue-form>

  </section>



</template>

<script lang="js">

  import axios from 'axios'

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData: this.getInitialData(),
        enviando: false,
        edadMin: "18",
        edadMax: "120",
        caracterMin: "5",
        caracterMax: "15",
        url: 'https://5eade7584350860016e13bab.mockapi.io/usuarios'
      }
    },
    methods: {
      getInitialData() {
        return {
          nombre: '',
          edad: '',
          email: ''
        }
      },
      enviar() {
        this.enviando = true
        console.log(this.formData)
        this.formData = this.getInitialData()
        this.formState._reset()
      },
      postAxios() {
        let post = {
          nombre: this.formData.nombre,
          edad: this.formData.edad,
          email: this.formData.email
        }
        axios.post(this.url, post, {
          'content-type' : 'application/json'
        })
        .then( res => {
        console.log(res.data)
        })
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
  .label {
    margin-top: 10px;
  }
  .alert {
    color: rgb(20, 20, 119);
  }
  h3 {
    font-size: 22px;
    text-align:center;
  }
</style>
