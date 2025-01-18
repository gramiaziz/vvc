<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h3
    :class="
      cn('notext-2xl nofont-semibold noleading-none notracking-tight', props.class)
    "
  >
    <slot />
  </h3>
</template>
