export type FlightOptionProps = {
    departureTime: string;
    arrivalTime: string;
    flightNumber: number;
    departureAirport: string;
    arrivalAirport: string;
    gate: string;
    stops: string;
    prices: {
      firstClass: number;
      business: number;
      mainCabin: number;
    };
  };
