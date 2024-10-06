import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import axios from "axios";

export const nasaRouter = createTRPCRouter({
  getDailyData: publicProcedure
    .input(
      z.object({
        latitude: z.number(),
        longitude: z.number(),
        startDate: z.string(),
        endDate: z.string(),
        parameters: z.array(z.string()),
      })
    )
    .query(async ({ input }) => {
      const { latitude, longitude, startDate, endDate, parameters } = input;
      const baseUrl = "https://power.larc.nasa.gov/api/temporal/daily/point";

      const url = new URL(baseUrl);
      url.searchParams.append("parameters", parameters.join(","));
      url.searchParams.append("community", "ag");
      url.searchParams.append("longitude", longitude.toString());
      url.searchParams.append("latitude", latitude.toString());
      url.searchParams.append("format", "JSON");
      url.searchParams.append("start", startDate);
      url.searchParams.append("end", endDate);

      try {
        const response = await axios.get(url.toString());
        return response.data;
      } catch (error) {
        throw new Error("Errore nel recupero dei dati NASA POWER");
      }
    }),
});

/*
const result = await trpc.nasa.getDailyData.query({
  latitude: 40.6819,
  longitude: 14.7681,
  startDate: "20241002",
  endDate: "20241002",
  parameters: ["T2M"],
});

console.log(result);
*/
