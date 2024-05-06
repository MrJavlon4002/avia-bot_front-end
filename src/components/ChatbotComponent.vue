<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      loaded: false,
    };
  },
  async created() {

  },
  methods: {
    show() {
      this.loaded = true;
      console.log(this.loaded);
      
    }
  },
});
</script>≈

<template>
  <div v-show="!loaded" class="w-full h-[100vh] overflow-hidden flex justify-center items-center">
    <img class="w-[50%] md:w-[30%] animate-pulse" src="../assets/images/Main Logo.jpg" alt="">
  </div>
  <div v-show="loaded" class=" h-[100vh] flex flex-col gap-10 pt-[100px] px-[10%]">
    <iframe style="border: none;" @load="show" srcdoc="<body><script src='https://cdn.botpress.cloud/webchat/v1/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Chat with bot',
                  'botConversationDescription': 'This chatbot was built surprisingly fast with Botpress',
                  'botName': 'Avia Bot',
                  'botId': '1712da2f-011c-4b57-b25f-45db15c798c6',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': '1712da2f-011c-4b57-b25f-45db15c798c6',
                  'enableConversationDeletion': true,
                  'showPoweredBy': true,
                  'className': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                  'hideWidget': true,
                  'showCloseButton': false,
                  'disableAnimations': true,
                  'closeOnEscape': false,
                  'showConversationsButton': false,
                  'enableTranscriptDownload': false,
                  'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/89d1c576-800e-443c-9d6a-aac4c5fb8016/v24328/style.css'
                  
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>" width="100%" height="100%"></iframe>
  </div>
</template>




<style>
.bpw-anim-none {
  background: red !important;
}
</style>