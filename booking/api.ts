import { AvailabilityResponse, BookingRequest } from './types';

// Dr. Tokár Zsuzsanna Kardiológia API configuration
const BASE_URL = 'https://jdwhmvruzbvkzgfdousz.supabase.co/functions/v1';
const PUBLIC_API_KEY = 'I1PqMKsznx7kVd5aTx9qQQN6YHXEkOVVBTTpCE6f3nZGfu7O';
const BOOKING_API_KEY = 'mXqaHgCWU2TRBwN6296EIqJcqzEWaJdkVCRamma97ecHmWFB';

export class BookingApiError extends Error {
    constructor(
        message: string,
        public status: number,
        public isSlotTaken: boolean = false
    ) {
        super(message);
        this.name = 'BookingApiError';
    }
}

export async function fetchAvailability(): Promise<AvailabilityResponse> {
    const response = await fetch(`${BASE_URL}/get-availability`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${PUBLIC_API_KEY}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new BookingApiError(
            'Nem sikerült lekérni az elérhetőségeket',
            response.status
        );
    }

    return response.json();
}

export async function createBooking(data: BookingRequest): Promise<void> {
    const response = await fetch(`${BASE_URL}/create-booking`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${BOOKING_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.status === 409) {
        throw new BookingApiError(
            'Ez az időpont már nem elérhető',
            409,
            true
        );
    }

    if (!response.ok) {
        throw new BookingApiError(
            'Nem sikerült elküldeni a foglalást',
            response.status
        );
    }
}
