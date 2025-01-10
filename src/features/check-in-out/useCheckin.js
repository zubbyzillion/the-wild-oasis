import { useMutation, useQueryClient } from "@tanstack/react-query";

export default useChecking() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
        mutationFn: (booking) => updateBooking(bookingId, {
            status: "checked-in",
            isPaid: true,
        }),

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} successfully checked-in`);
            queryClient.invalidateQueries({ active: true });
            navigate("/");
        },

        onError: () => toast.error("There was an error while checking in");
    });

    return { checkin, isCheckingIn }
}