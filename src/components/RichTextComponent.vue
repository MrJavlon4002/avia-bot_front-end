<script  setup lang='ts'>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

interface IProps {
  modelValue?: string
  text?: string
  height?: string
  maxHeight?: string
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  text: '',

})
</script>

<template>
  <div :class="`${props.text !== '' ? '' : ' bg-white '}`"  class="block h-[300px] w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 outline-none ring-inset ring-mainGreen placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkGreen sm:text-sm sm:leading-6">
    <QuillEditor 
      :content="props.text === '' ? props.modelValue : props.text"
      :toolbar="props.text !== '' ? '' : 'essential'"
      :theme="props.text !== '' ? 'bubble' : 'snow'"
      :read-only="props.text !== '' ? true : false"
      :style="`overflow-y:auto; height:${height}; max-height:${maxHeight}; border:none;`"
      class="dark:bg-gray-8"
      content-type="html"
      @update:content="(e) => $emit('update:modelValue', e)"
    />
  </div>
</template>
