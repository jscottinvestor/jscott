interface OutputTabProps {
    sum: number
  }
  
  export default function OutputTab({ sum }: OutputTabProps) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Output</h2>
        <p className="text-2xl font-bold">Sum: {sum}</p>
      </div>
    )
  }
  
  