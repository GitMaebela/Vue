<template>
  <div class="home">
    <fileUpload></fileUpload>
  </div>
</template>

<script>
// @ is an alias to /src
import fileUpload from '@/components/fileUpload.vue'

export default {
  name: 'Home',
  components: {
    fileUpload
  }
}
</script>
