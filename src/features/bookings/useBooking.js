import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import Booking from "../../pages/Booking";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
	const { bookingId } = useParams();

	const {
		isLoading,
		data: booking,
		error,
	} = useQuery({
		queryKey: ["booking", bookingId],
		queryFn: () => getBooking(bookingId),
		retry: false,
	});

	

return { isLoading, error, booking } ;
}
