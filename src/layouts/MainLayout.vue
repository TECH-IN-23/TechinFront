<template>
  <q-layout view="hHh lpR fFf" class="flex flex-center q-pa-md">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn stretch flat to="/">
          <q-avatar>
            <img class="LOGO" src="../assets/quasar-logo-full.svg" />
          </q-avatar>
          TECH IN
        </q-btn>
        <q-space />

        <div class="menu">
          <q-btn stretch flat label="CADASTRO" to="pages/LOGIN/LOGIN.vue" />
          <q-btn stretch flat label="PESQUISA" to="/page1"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary-8 text-white">
    <div>
      <div class="container_footer flex flex-center">

        <q-item class="justify-evenly">
          <q-item>
            <q-list>
              <li><p>Acesso rapido</p></li>
              <li><q-breadcrumbs-el label="Descinção" to="#"/></li>
              <li><q-breadcrumbs-el label="Descinção" to="sobre"/></li>
              <li><q-breadcrumbs-el label="Voluntarios" to="#"/></li>
            </q-list>
            </q-item>

          <q-item>
            <q-list>
              <q-avatar>
                <img class="LOGO" src="../assets/quasar-logo-full.svg" />
              </q-avatar>
               TECH IN
            </q-list>
            </q-item>

            <q-item>
            <q-list>
              <li><p>Nossas Redes Sociais</p></li>
              <li class="i-redes">
                <a href="#"><img src="../assets/instagram.svg" alt="Instagram"></a>
                <a href="#"><img src="../assets/facebook.svg" alt="Facebook"></a>
                <a href="#"><img src="../assets/youtube.svg" alt="Youtube"></a>
                <a href="#"><img src="../assets/linkedin.svg" alt="Linkedin"></a>
              </li>
              <li><p>Fale Conosco - 3410 - 0231</p></li>
            </q-list>
            </q-item>
        </q-item>

      </div>

      <div>

        <q-item class="footer-links">
          <q-list class="footer-icons">
          </q-list>
        </q-item>

      </div>

    </div>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.q-layout {
  background-color: #E7B814;
}

.container_footer{
    height: 90px;
    width: 100%;
}

.q-footer ul, li, a{
    list-style: none;
    text-decoration: none;
}

.row_footer .q-item{
  padding: 8px 40px;
}

.footer-links{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding-bottom: 10px;
}

.footer-icons img {
  height: 46px;
  width : 46px;
  padding-right: 12px;
}

.i-redes img{
  padding: 2px;
  width: 35px;
  height: 35px;
}

</style>
