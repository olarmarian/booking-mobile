import { Booking } from "../types/models";
import { ApiClient, HttpMethod } from "./api.client";

export const BookingsRepository = () => {
  const url = "";
  const client = new ApiClient<Booking>(url);

  const list = (params?: string) => {
    return client.request(params, HttpMethod.GET);
  };

  const remove = (id: string) => {
    return client.request(id, HttpMethod.DELETE);
  };

  const create = (resource: Booking) => {
    return client.request(null, HttpMethod.POST, null, resource);
  };

  const update = (id: string, resource: Booking) => {
    return client.request(id, HttpMethod.PUT, null, resource);
  };

  return { list, create, remove, update };
};
