from pydantic import BaseModel 

class UserAccount(BaseModel):
    username: str
    password: str
    email: str
    full_name: str = None
    disabled: bool = None
    class Config:
        orm_mode = True

class FlightBookingRequest(BaseModel):
    username: str
    airline: str
    departure: str
    arrival: str
    date: str

class FlightBookingResponse(BaseModel):
    pass

