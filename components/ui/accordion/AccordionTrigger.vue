<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-vue-next'
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionHeader class="noflex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'noflex noflex-1 noitems-center nojustify-between nopy-4 nofont-medium notransition-all hover:nounderline [&[data-state=open]>svg]:norotate-180',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          class="noh-4 now-4 noshrink-0 notransition-transform noduration-200"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
