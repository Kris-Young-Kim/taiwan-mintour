import { Alert as AlertPrimitive, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface AlertProps {
  variant?: "default" | "success" | "warning" | "error" | "info"
  title?: string
  children: React.ReactNode
  className?: string
}

const variantStyles = {
  default: "border-border bg-background",
  success: "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400",
  warning: "border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  error: "border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-400",
  info: "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-400",
}

const iconMap = {
  default: Info,
  success: CheckCircle,
  warning: AlertCircle,
  error: XCircle,
  info: Info,
}

export default function Alert({ variant = "default", title, children, className }: AlertProps) {
  const Icon = iconMap[variant]

  return (
    <AlertPrimitive className={cn(variantStyles[variant], className)}>
      <Icon className="h-4 w-4" />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </AlertPrimitive>
  )
}

