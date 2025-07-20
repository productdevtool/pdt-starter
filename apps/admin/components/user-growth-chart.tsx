'use client'

import { useQuery } from "convex/react"
import { api } from "@convex/_generated/api"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export function UserGrowthChart() {
  const data = useQuery(api.users.getUsersByWeek)

  if (!data) {
    return <p>Loading user growth data...</p>
  }

  return (
    <div className="w-full h-80">
      <h2 className="text-xl font-bold mb-4">User Growth by Week</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
