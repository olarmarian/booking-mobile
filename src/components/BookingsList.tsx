import { StyleSheet, VirtualizedList, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Booking } from "../types/models";
import { BookingCard } from "./BookingCard";

interface BookingsListProps {
  bookings: Booking[];
  isLoading: boolean;
  error: { message: string };
}

export const BookingsList = ({
  bookings,
  isLoading,
  error,
}: BookingsListProps) => {
  const getBooking = (bookings: Booking[], index: number) => {
    return bookings[index];
  };

  const getBookingsCount = () => bookings.length;
  return isLoading ? (
    <ActivityIndicator animating={true} />
  ) : !isLoading && !error ? (
    <VirtualizedList
      style={styles.list}
      data={bookings}
      initialNumToRender={4}
      renderItem={({ item }) => <BookingCard booking={item} />}
      keyExtractor={(booking) => `${booking.id}`}
      getItemCount={getBookingsCount}
      getItem={getBooking}
    ></VirtualizedList>
  ) : (
    <Text>{error.message}</Text>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
    marginBottom: 20,
    paddingBottom: 30,
  },
});
