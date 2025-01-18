<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'norounded-lg noborder nobg-card notext-card-foreground noshadow-sm',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
