export interface FlightInfo {
    airlineLogo: string;
    airlineName: string;
    departureTime: string;
    arrivalTime: string;
    origin: string;
    destination: string;
    stops: string;
  }
  
export const flights: FlightInfo[] = [
    {
        airlineLogo: "path_to_southwest_logo.png", 
        airlineName: "Southwest",
        departureTime: "6:50 PM",
        arrivalTime: "3:00 AM",
        origin: "LAX",
        destination: "JFK",
        stops: "Nonstop",
      },
  ];