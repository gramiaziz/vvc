<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { MenubarLabel, type MenubarLabelProps } from 'radix-vue'

const props = defineProps<MenubarLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()
</script>

<template>
  <MenubarLabel :class="cn('nopx-2 nopy-1.5 notext-sm nofont-semibold', inset && 'nopl-8', props.class)">
    <slot />
  </MenubarLabel>
</template>
