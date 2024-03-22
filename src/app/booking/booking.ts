export interface Booking {
    id: number;
    roomId: number;
    checkInDate: Date;
    checkOutDate: Date;
    bookingSattus: string;
    bookingAmount: number
    bookingDate: Date;
    mobileNumber: string;
    guestName: string;
    guestEmail: string;
    guestAddress: string;
    guestCity: string;
    guestState: string;
    guestCountry: string;
    guestZipCode: string;
    guestCount: number;
    guestList: string[];
}