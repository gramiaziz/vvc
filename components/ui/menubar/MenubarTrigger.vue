<script setup lang="ts">
import { cn } from '@/lib/utils'
import { MenubarTrigger, type MenubarTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'noflex nocursor-default noselect-none noitems-center norounded-sm nopx-3 nopy-1.5 notext-sm nofont-medium nooutline-none focus:nobg-accent focus:notext-accent-foreground data-[state=open]:nobg-accent data-[state=open]:notext-accent-foreground',
        props.class,
      )
    "
  >
    <slot />
  </MenubarTrigger>
</template>
