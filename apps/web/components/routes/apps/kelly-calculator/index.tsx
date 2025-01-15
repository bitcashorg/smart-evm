'use client'

import React, { useState, ChangeEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface Investment {
  name: string;
  gain: number;
  loss: number;
  probability: number;
  kellyPercentage: number;
  allocationAmount: number;
}

const KellyCriterionCalculator: React.FC = () => {
  const [totalCapital, setTotalCapital] = useState<number>(10000);
  const [investments, setInvestments] = useState<Investment[]>([
    { name: 'Investment 1', gain: 100, loss: 50, probability: 85, kellyPercentage: 0, allocationAmount: 0 }
  ]);

  const calculateKelly = (gain: number, loss: number, probability: number): number => {
    const p = probability / 100;
    const q = 1 - p;
    const a = loss / 100;
    const b = gain / 100;
    return ((p / a) - (q / b)) * 100;
  };

  const handleInputChange = (index: number, field: keyof Investment, value: string | number) => {
    const newInvestments = [...investments];
    newInvestments[index] = {
      ...newInvestments[index],
      [field]: value
    };
    newInvestments[index].kellyPercentage = calculateKelly(
      newInvestments[index].gain,
      newInvestments[index].loss,
      newInvestments[index].probability
    );
    newInvestments[index].allocationAmount = (newInvestments[index].kellyPercentage / 100) * totalCapital;
    setInvestments(newInvestments);
  };

  const addInvestment = () => {
    if (investments.length < 10) {
      setInvestments([...investments, {
        name: `Investment ${investments.length + 1}`,
        gain: 100,
        loss: 50,
        probability: 50,
        kellyPercentage: 0,
        allocationAmount: 0
      }]);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Kelly Criterion Calculator</h1>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Total Capital</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="number"
            value={totalCapital}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTotalCapital(Number(e.target.value))}
            placeholder="Enter total capital"
          />
        </CardContent>
      </Card>
      {investments.map((inv, index) => (
        <Card key={index} className="mb-4">
          <CardHeader>
            <CardTitle>{inv.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              className="mb-2"
              placeholder="Investment Name"
              value={inv.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(index, 'name', e.target.value)}
            />
            <Input
              className="mb-2"
              type="number"
              placeholder="Gain of Positive Outcome (%)"
              value={inv.gain}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(index, 'gain', Number(e.target.value))}
            />
            <Input
              className="mb-2"
              type="number"
              placeholder="Loss of Negative Outcome (%)"
              value={inv.loss}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(index, 'loss', Number(e.target.value))}
            />
            <div className="mb-2">
              <label>Probability of Success: {inv.probability}%</label>
              <Slider
                value={[inv.probability]}
                onValueChange={(value) => handleInputChange(index, 'probability', value[0])}
                max={100}
                step={1}
              />
            </div>
            <p>Kelly %: {inv.kellyPercentage.toFixed(2)}%</p>
            <p>Recommended Investment: ${inv.allocationAmount.toFixed(2)}</p>
          </CardContent>
        </Card>
      ))}
      <Button onClick={addInvestment} className="mb-4">
        Add Investment (Max 10)
      </Button>
    </div>
  );
};

export default KellyCriterionCalculator;