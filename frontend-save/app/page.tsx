"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import InputTab from "./components/InputTab"
import OutputTab from "./components/OutputTab"

export default function ExcelModel() {
  const [input1, setInput1] = useState<number>(0)
  const [input2, setInput2] = useState<number>(0)

  const handleInputChange = (tabNumber: number, value: number) => {
    if (tabNumber === 1) {
      setInput1(value)
    } else {
      setInput2(value)
    }
  }

  const sum = input1 + input2

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Excel Model Replica</CardTitle>
          <CardDescription>A simple two-input, one-output model</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="input1">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="input1">Input 1</TabsTrigger>
              <TabsTrigger value="input2">Input 2</TabsTrigger>
              <TabsTrigger value="output">Output</TabsTrigger>
            </TabsList>
            <TabsContent value="input1">
              <InputTab
                tabNumber={1}
                value={input1}
                onChange={handleInputChange}
              />
            </TabsContent>
            <TabsContent value="input2">
              <InputTab
                tabNumber={2}
                value={input2}
                onChange={handleInputChange}
              />
            </TabsContent>
            <TabsContent value="output">
              <OutputTab sum={sum} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

