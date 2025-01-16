<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Check } from 'lucide-vue-next'
import {
  MenubarCheckboxItem,
  type MenubarCheckboxItemEmits,
  type MenubarCheckboxItemProps,
  MenubarItemIndicator,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarCheckboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<MenubarCheckboxItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarCheckboxItem
    v-bind="forwarded"
    :class="cn(
      'norelative noflex nocursor-default noselect-none noitems-center norounded-sm nopy-1.5 nopl-8 nopr-2 notext-sm nooutline-none focus:nobg-accent focus:notext-accent-foreground data-[disabled]:nopointer-events-none data-[disabled]:noopacity-50',
      props.class,
    )"
  >
    <span class="noabsolute noleft-2 noflex noh-3.5 now-3.5 noitems-center nojustify-center">
      <MenubarItemIndicator>
        <Check class="now-4 noh-4" />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarCheckboxItem>
</template>
