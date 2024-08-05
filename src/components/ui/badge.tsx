import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center bg-[#292C34] font-['Maven_Pro'] rounded-full text-[#C0C4CE] gap-2 px-[1rem] py-[0.5625rem] text-sm font-light transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
