import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Header } from "../components";
import { BookingsList } from "../components/BookingsList";
import { BookingsService } from "../services";
import { MetadataField, Sorting, Status } from "../types/enums";
import { Metadata } from "../types/interfaces";
import { Booking } from "../types/models";

const service = BookingsService();

export const Bookings = () => {
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [metadata, setMetadata] = useState<Metadata>({
    filters: [],
    sorting: { field: MetadataField.DATE, value: Sorting.DESC },
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    // service
    //   .getBookings(metadata)
    //   .then((data: Booking[]) => {
    //     setBookings(data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err);
    //     setIsLoading(false);
    //   });
    setBookings([
      {
        client: "client 1",
        date: new Date(),
        id: 1,
        phoneNumber: "0734332234",
        status: Status.IN_PROGRESS,
        title: "Ceva titlu de tip",
        location: "Cluj Napoca, Strada Intre Lacuri, nr. 10, ap. 03",
      },
      {
        client: "client 2",
        date: new Date(),
        id: 2,
        phoneNumber: "0734332234",
        status: Status.TODO,
        title: "Ceva titlu de tip",
        location: "Cluj Napoca, Strada Intre Lacuri, nr. 10, ap. 03",
      },
      {
        client: "client 4",
        date: new Date(),
        id: 4,
        phoneNumber: "0734332234",
        status: Status.DONE,
        title: "Ceva titlu de tip",
        location: "Cluj Napoca, Strada Intre Lacuri, nr. 10, ap. 03",
      },
      {
        client: "client 3",
        date: new Date(),
        id: 3,
        phoneNumber: "0734332234",
        status: Status.TODO,
        title: "Ceva titlu de tip",
        location: "Cluj Napoca, Strada Intre Lacuri, nr. 10, ap. 03",
      },
      {
        client: "client 5",
        date: new Date(),
        id: 5,
        phoneNumber: "0734332234",
        status: Status.TODO,
        title: "Ceva titlu de tip",
        location: "Cluj Napoca, Strada Intre Lacuri, nr. 10, ap. 03",
      },
      {
        client: "client 7",
        date: new Date(),
        id: 7,
        phoneNumber: "0734332234",
        status: Status.TODO,
        title: "Ceva titlu de tip",
        location: "Cluj Napoca, Strada Intre Lacuri, nr. 10, ap. 03",
      },
    ]);
    setIsLoading(false);
  }, [reload, metadata]);

  // Just in case
  const onReload = () => setReload(true);

  const onSortingChange = (field: MetadataField, value: Sorting) => {
    setMetadata({
      ...metadata,
      sorting: { field, value },
    });
  };

  // Just in case
  const onAddFilter = (field: MetadataField, value: string) => {
    const updatedFilters = cloneDeep(metadata.filters);
    updatedFilters.push({ field, value });
    setMetadata({
      ...metadata,
      filters: updatedFilters,
    });
  };

  // Just in case
  const onRemoveFilter = (field: MetadataField, value: string) => {
    const updatedFilters = cloneDeep(metadata.filters);
    const index = updatedFilters.findIndex(
      (filter) => filter.field === field && filter.value === value
    );

    updatedFilters.splice(index, 1);

    setMetadata({
      ...metadata,
      filters: updatedFilters,
    });
  };

  return (
    <SafeAreaView style={styles.background}>
      <Header sortingChange={onSortingChange} />
      <BookingsList
        isLoading={isLoading}
        error={error}
        bookings={bookings}
      ></BookingsList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
});
