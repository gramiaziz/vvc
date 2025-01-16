<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('noml-auto notext-xs notracking-widest notext-muted-foreground', props.class)">
    <slot />
  </span>
</template>
