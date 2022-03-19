<template>
  <div class="text-sm">
    {{
      new Date(props.date).toLocaleString(props.userlocale, {
        dateStyle: props.datestyle,
      })
    }}
  </div>
</template>

<script setup>
const props = defineProps({
  date: {
    type: String,
    default: '22-03-25',
    required: true,
  },
  datestyle: {
    type: String,
    default: 'medium',
    required: true,
  },
  userlocale: {
    type: String,
    default: 'en-US',
    required: true,
  },
})
</script>
