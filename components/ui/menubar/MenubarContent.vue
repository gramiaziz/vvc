<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  MenubarContent,
  type MenubarContentProps,
  MenubarPortal,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<MenubarContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    align: 'start',
    alignOffset: -4,
    sideOffset: 8,
  },
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarPortal>
    <MenubarContent
      v-bind="forwardedProps"
      :class="
        cn(
          'noz-50 nomin-w-48 nooverflow-hidden norounded-md noborder nobg-popover nop-1 notext-popover-foreground noshadow-md data-[state=open]:noanimate-in data-[state=closed]:nofade-out-0 data-[state=open]:nofade-in-0 data-[state=closed]:nozoom-out-95 data-[state=open]:nozoom-in-95 data-[side=bottom]:noslide-in-from-top-2 data-[side=left]:noslide-in-from-right-2 data-[side=right]:noslide-in-from-left-2 data-[side=top]:noslide-in-from-bottom-2',
          props.class,
        )
      "
    >
      <slot />
    </MenubarContent>
  </MenubarPortal>
</template>
