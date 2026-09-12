import { network } from "./network";

/* Healthcheck */
export const getHealthCheck = () =>
  network(`/health-check`, "GET");
