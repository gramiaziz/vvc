import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'noinline-flex noitems-center nojustify-center nogap-2 nowhitespace-nowrap norounded-md notext-sm nofont-medium noring-offset-background notransition-colors focus-visible:nooutline-none focus-visible:noring-2 focus-visible:noring-ring focus-visible:noring-offset-2 disabled:nopointer-events-none disabled:noopacity-50 [&_svg]:nopointer-events-none [&_svg]:nosize-4 [&_svg]:noshrink-0',
  {
    variants: {
      variant: {
        default:
          'nobg-primary notext-primary-foreground noshadow hover:nobg-primary/90',
        destructive:
          'nobg-destructive notext-destructive-foreground noshadow-sm hover:nobg-destructive/90',
        outline:
          'noborder noborder-input nobg-background noshadow-sm hover:nobg-accent hover:notext-accent-foreground',
        secondary:
          'nobg-secondary notext-secondary-foreground noshadow-sm hover:nobg-secondary/80',
        ghost: 'hover:nobg-accent hover:notext-accent-foreground',
        link: 'notext-primary nounderline-offset-4 hover:nounderline',
      },
      size: {
        default: 'noh-9 nopx-4 nopy-2',
        sm: 'noh-8 norounded-md nopx-3 notext-xs',
        lg: 'noh-10 norounded-md nopx-8',
        icon: 'noh-9 now-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
