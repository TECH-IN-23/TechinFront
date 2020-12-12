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
        </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/page1" label="LOGIN" />
        <q-route-tab to="/page1" label="HOME" />
        <q-route-tab to="/page2" label="PRODUTOS" />
        <q-route-tab to="/page3" label="PARCEIROS" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white" align="center">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          TECH IN
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/page1" label="LOGIN" />
        <q-route-tab to="/page1" label="HOME" />
        <q-route-tab to="/page2" label="PRODUTOS" />
        <q-route-tab to="/page3" label="PARCEIROS" />
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

<style lang="scss">
.q-layout {
  background-color: #E5CA39;
}
</style>