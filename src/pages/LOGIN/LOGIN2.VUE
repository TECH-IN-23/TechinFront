<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98" align="left">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../../assets/logo-inv.png">
          </q-avatar>
          TECH IN
        </q-toolbar-title>
        </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/LOGIN" label="LOGIN" />
        <q-route-tab to="/HOME" label="HOME" />
        <q-route-tab to="/PRODUTOS" label="PRODUTOS" />
        <q-route-tab to="/PARCEIROS" label="PARCEIROS" />
      </q-tabs>
    </q-header>

    <q-page-container class= "bg-yellow-8 max">


  <div class="q-pa-md row justify-center items-start q-gutter-md">

    <q-card class="my-card q=ma=lg float-left"  flat bordered>
      <q-card-section class="q-pa-lg">
        <div class="text-h6">Bem vindo à TECH IN</div>
        <div class="text-subtitle2">Inscreva-se em nosso site e aproveite todas as funcionalidades que nosso sistema tem a oferecer, tais como: produtos e serviços especializados para auxiliar em todo tipo de disfunção motora.</div>
      </q-card-section>
    </q-card>

    <q-card class=" q-pa-md bg-yellow float-right " >

      <q-card-section>
        <div class="text-h6">Cadastro Operador </div>
      </q-card-section>

      <q-card-section class=" text-white">
      <q-form @submit="cadastrar"
        class="q-gutter-md"
        method="post"
      >
        <q-input
         id="nome"
          filled
          v-model='nome'
          label="Nome: *"
          name="nome"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']" ></q-input>

        <q-input
          filled
          type="email"
          v-model="email"
          label="Email: *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']" ></q-input>

        <q-input
          filled
          type="password"
          v-model="senha"
          label="Senha: *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']" ></q-input>

        <q-input
          filled
          type="password"
          v-model="confSenha"
          label="Confirma Senha: *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']" ></q-input>

        <q-btn label="Cadastrar"  type="submit" color="primary"/>

        </q-form>

      </q-card-section>
    </q-card>

  </div>




    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white" align="center">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../../assets/logo-inv.png">
          </q-avatar>
          TECH IN
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/LOGIN" label="LOGIN" />
        <q-route-tab to="/HOME" label="HOME" />
        <q-route-tab to="/PRODUTOS" label="PRODUTOS" />
        <q-route-tab to="/PARCEIROS" label="PARCEIROS" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data () {


    return {
       email : null,
         nome : '',
        senha : null,
        confSenha : null
    }
  },
  methods :{
    cadastrar : (e)=>{
        alert (this.nome);
      e.preventDefault();
    }
  }
}
</script>

<style lang="scss">
.my-card {
  background-color: yellow;
  width: 682px;
  height: 647px;
}

.q-card-section {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 70px;
  line-height: 82px;
}
</style
>
