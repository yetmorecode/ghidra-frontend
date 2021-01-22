<template>
  <q-page class="fit flex">
    <div class="q-pa-md fit">
      <p>Ghidra &amp; Ghidra Frontend are powered by:</p>
      <q-list>
        <q-item>
          <EssentialLink
            title="Ghidra"
            caption="A software reverse engineering (SRE) suite of tools developed by NSA's Research Directorate in support of the Cybersecurity mission"
            icon="contact_support"
            link="https://ghidra-sre.org/"
          />
        </q-item>
        <q-item>
          <EssentialLink
            title="Ghidra Frontend"
            caption="yetmorecode/ghidra-rest-frontend"
            icon="contact_support"
            link="https://github.com/yetmorecode/ghidra-rest-frontend"
          />
        </q-item>
        <q-item>
          <EssentialLink
            title="Ghidra REST"
            caption="yetmorecode/ghidra-rest"
            icon="contact_support"
            link="https://github.com/yetmorecode/ghidra-rest"
          />
        </q-item>
        <q-item>
          <EssentialLink
            title="spring.io"
            caption="Spring makes programming Java quicker, easier, and safer for everybody. Spring’s focus on speed, simplicity, and productivity has made it the world's most popular Java framework."
            icon="contact_support"
            link="https://spring.io/"
          />
        </q-item>
        <q-item>
          <EssentialLink
            title="Vue.js"
            caption="The Progressive JavaScript Framework."
            icon="contact_support"
            link="https://github.com/yetmorecode/ghidra-rest-frontend"
          />
        </q-item>
        <q-item>
          <EssentialLink
            title="GoldenLayout"
            caption="a multi-screen layout manager for webapps"
            icon="contact_support"
            link="https://golden-layout.com/"
          />
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
export default {
  name: 'About',
  components: { EssentialLink },
}
</script>
