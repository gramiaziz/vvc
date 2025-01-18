<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('noflex noflex-col nogap-y-1.5 nop-6', props.class)">
    <slot />
  </div>
</template>
