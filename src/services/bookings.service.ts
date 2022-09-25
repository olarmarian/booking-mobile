import { BookingsRepository } from "../repositories/bookings.repository";
import { Metadata } from "../types/interfaces";
import { Booking } from "../types/models";

export const BookingsService = () => {
  const repo = BookingsRepository();

  const getBookings = (metadata: Metadata) => {
    const params = toParams(metadata);
    return repo.list(params);
  };

  const toParams = (metadata: Metadata) => {
    const filters = metadata.filters
      .map((filter) => `${filter.field}=${filter.value}`)
      .join("&");

    const sorting = `${metadata.sorting.field}=${metadata.sorting.value}`;

    return filters ? `${filters}&${sorting}` : sorting;
  };

  const createBooking = (booking: Booking) => {
    return repo.create(booking);
  };

  const deleteBooking = (id: string) => {
    return repo.remove(id);
  };

  const updateBooking = (booking: Booking) => {
    const id = booking.id.toString();
    return repo.update(id, booking);
  };

  return { getBookings, createBooking, deleteBooking, updateBooking };
};
