<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-vue-next'
import { MenubarSubTrigger, type MenubarSubTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarSubTriggerProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'noflex nocursor-default noselect-none noitems-center norounded-sm nopx-2 nopy-1.5 notext-sm nooutline-none focus:nobg-accent focus:notext-accent-foreground data-[state=open]:nobg-accent data-[state=open]:notext-accent-foreground',
      inset && 'nopl-8',
      props.class,
    )"
  >
    <slot />
    <ChevronRight class="noml-auto noh-4 now-4" />
  </MenubarSubTrigger>
</template>
