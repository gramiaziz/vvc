<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Circle } from 'lucide-vue-next'
import {
  MenubarItemIndicator,
  MenubarRadioItem,
  type MenubarRadioItemEmits,
  type MenubarRadioItemProps,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarRadioItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<MenubarRadioItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarRadioItem
    v-bind="forwarded"
    :class="cn(
      'norelative noflex nocursor-default noselect-none noitems-center norounded-sm nopy-1.5 nopl-8 nopr-2 notext-sm nooutline-none focus:nobg-accent focus:notext-accent-foreground data-[disabled]:nopointer-events-none data-[disabled]:noopacity-50',
      props.class,
    )"
  >
    <span class="noabsolute noleft-2 noflex noh-3.5 now-3.5 noitems-center nojustify-center">
      <MenubarItemIndicator>
        <Circle class="noh-2 now-2 nofill-current" />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarRadioItem>
</template>
