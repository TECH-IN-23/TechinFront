<template>
  <q-layout view="hHh lpR fFf">


    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card q=ma=lg" flat bordered>
      <q-card-section class="q-pa-lg">
        <div class="text-h6">Bem vindo à TECH IN</div>
        <div class="text-subtitle2">Inscreva-se em nosso site e aproveite todas as funcionalidades que nosso sistema tem a oferecer, tais como: produtos e serviços especializados para auxiliar em todo tipo de disfunção motora</div>

      </q-card-section>

    </q-card>
    </div>

    <div class="login">
      <h1>Login</h1>
      <input type="text" placeholder="Email">
      <br>
      <input type="password" placeholder="Senha">
      <br>
      <div class="btn-login">
        <button>Login</button>
      </div>
      <p>
        Você não tem conta?
        <a href="">crie uma conta</a>
      </p>
    </div>

  </q-layout>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.my-card {
  background-color: #E6CA39;
  position: absolute;
  width: 682px;
  height: 647px;
  left: 27px;
  top: 138px;
}

.q-card-section {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 70px;
  line-height: 82px;
}
</style>
