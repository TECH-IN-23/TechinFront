<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

        <div class="conteudo">
      <div class="q-pa-md">
          <div class="q-col-gutter-md row items-start">

            <div class="col-6">
              <p class="text-h4 text-center">Titulos</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ex quaerat molestias ad, ratione consequatur incidunt dolor quod odit quas? Esse eum corrupti cupiditate modi est ullam consequatur, expedita optio.</p>
            </div>

            <div class="col-6">
              <div class="q-video">
                <iframe
                src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
                frameborder="0"
                allowfullscreen
                />
              </div>
            </div>

          </div>
        </div>
    </div>

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
