<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98" align="left">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          TECH IN
        </q-toolbar-title>
        <div>
        <q-btn label="LOGIN" type="submit" color="secondary"/>
      </div>
        </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/page1" label="HOME" />
        <q-route-tab to="/page2" label="PRODUTOS" />
        <q-route-tab to="/page3" label="PARCEIROS" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white" align="center">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          TECH IN
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab to="/page1" label="Acesso rápido" />
      </q-tabs>
      <q-tabs align="left">
        <q-route-tab to="/page1" label="Saiba mais" />
        <q-route-tab to="/page1" label="Quem somos" />
        <q-route-tab to="/page2" label="Objetivo" />
      </q-tabs>
      <q-tabs align="left">
        <q-route-tab to="/page1" label="A quem se destina" />
        <q-route-tab to="/page2" label="O que oferecemos" />
      </q-tabs>
      <q-tabs align="right">
        <q-route-tab to="/page1" label="A quem se destina" />
        <q-route-tab to="/page2" label="O que oferecemos" />
      </q-tabs>
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
