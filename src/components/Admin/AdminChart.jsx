import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useDashbordData } from "@/hooks/QueryHooks/useAdmin"
import Loader from "../ui/loader"
import { format, subMonths } from "date-fns"

const chartConfig = {
    booking: {
      label: "Booking",
      color: "#7c3aed",
    }
  };

export function AdminChart({data}) {
const date = new Date()
 
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking insight</CardTitle>
        <CardDescription>{format(subMonths(date, 6), 'MMM yyyy')} - {format(new Date(), "MMM yyyy")}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="booking"
              type="natural"
              stroke="var(--color-booking)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-booking)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="leading-none text-muted-foreground">
          Showing total booking of the last 5 months
        </div>
      </CardFooter>
    </Card>
  )
}
