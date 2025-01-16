<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  MenubarPortal,
  MenubarSubContent,
  type MenubarSubContentEmits,
  type MenubarSubContentProps,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarSubContentProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<MenubarSubContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarPortal>
    <MenubarSubContent
      v-bind="forwarded"
      :class="
        cn(
          'noz-50 nomin-w-32 nooverflow-hidden norounded-md noborder nobg-popover nop-1 notext-popover-foreground data-[state=open]:noanimate-in data-[state=closed]:noanimate-out data-[state=closed]:nofade-out-0 data-[state=open]:nofade-in-0 data-[state=closed]:nozoom-out-95 data-[state=open]:nozoom-in-95 data-[side=bottom]:noslide-in-from-top-2 data-[side=left]:noslide-in-from-right-2 data-[side=right]:noslide-in-from-left-2 data-[side=top]:noslide-in-from-bottom-2',
          props.class,
        )
      "
    >
      <slot />
    </MenubarSubContent>
  </MenubarPortal>
</template>
