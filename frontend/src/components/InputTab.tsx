import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputTabProps {
  tabNumber: number
  value: number
  onChange: (tabNumber: number, value: number) => void
}

export default function InputTab({ tabNumber, value, onChange }: InputTabProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Input {tabNumber}</h2>
      <div className="space-y-2">
        <Label htmlFor={`input${tabNumber}`}>Enter an integer:</Label>
        <Input
          id={`input${tabNumber}`}
          type="number"
          value={value}
          onChange={(e) => onChange(tabNumber, parseInt(e.target.value) || 0)}
        />
      </div>
    </div>
  )
}

