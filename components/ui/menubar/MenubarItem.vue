<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  MenubarItem,
  type MenubarItemEmits,
  type MenubarItemProps,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const emits = defineEmits<MenubarItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarItem
    v-bind="forwarded"
    :class="cn(
      'norelative noflex nocursor-default noselect-none noitems-center norounded-sm nopx-2 nopy-1.5 notext-sm nooutline-none focus:nobg-accent focus:notext-accent-foreground data-[disabled]:nopointer-events-none data-[disabled]:noopacity-50',
      inset && 'nopl-8',
      props.class,
    )"
  >
    <slot />
  </MenubarItem>
</template>
