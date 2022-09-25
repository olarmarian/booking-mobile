import { Booking } from "../types/models";
import { StyleSheet, Text, View } from "react-native";
import * as moment from "moment";
import { StatusColor, StatusLabel } from "../types/enums";

interface BookingCardProps {
  booking: Booking;
}
export const BookingCard = ({ booking }: BookingCardProps) => {
  const formattedDate = moment.utc(booking.date).format("LLL");
  const statusColor = StatusColor[booking.status];
  const statusLabel = StatusLabel[booking.status];
  return (
    <View style={styles.card}>
      <View style={{ ...styles.displayFlex }}>
        <Text style={{ ...styles.font22, ...styles.bold }}>
          {booking.title}
        </Text>
        <View style={styles.status}>
          <Text style={{ ...styles.font16, color: statusColor }}>
            {statusLabel}
          </Text>
        </View>
      </View>
      <Text style={styles.font12}>Date: {formattedDate}</Text>
      <View>
        <Text style={{ ...styles.font16, ...styles.bold }}>
          {booking.client}
        </Text>
        <Text style={styles.font12}>{booking.phoneNumber}</Text>
        <Text style={styles.font12}>{booking.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  status: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  displayFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  card: {
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOpacity: 0.01,
    width: "100%",
    height: 170,
    marginTop: 10,
    borderColor: "#c3c3c3",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#192bc2",
    display: "flex",
    justifyContent: "space-between",
  },
  font22: {
    fontSize: 22,
    color: "#fff",
  },
  font16: {
    fontSize: 16,
    color: "#fff",
  },
  font12: {
    fontSize: 12,
    color: "#fff",
  },
});
