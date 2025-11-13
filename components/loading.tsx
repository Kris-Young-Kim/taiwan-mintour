import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

interface LoadingProps {
  className?: string
  size?: "sm" | "md" | "lg"
  text?: string
}

const sizeMap = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
}

export default function Loading({ className, size = "md", text }: LoadingProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-2", className)}>
      <Spinner className={sizeMap[size]} />
      {text && <p className="text-sm text-foreground/60">{text}</p>}
    </div>
  )
}

