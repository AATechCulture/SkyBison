import random, string

class AANumber():
    def __init__(self, name, preferred_airport=None, number=None, email=None) -> None:
        self.name = name
        self.preferred_airport = ""
        self.number = ""
        self.email = ""
        self.password = ""
        self.rewards_miles = 0
        self.id = self.generate_id()
        self.associated_cards = []
        self.travel_credit = 0

    def generate_id(self):
        numbers = ''.join(random.choices(string.digits, k=4))
        letters = ''.join(random.choices(string.ascii_uppercase, k=3))

        combined = list(numbers + letters)
        random.shuffle(combined)
        result = ''.join(combined)

        return result
    
EXAMPLE_AA_ACCOUNTS = []
EXAMPLE_AA_NUMBERS = ["X989UT2"]
names = ["Ryan Taylor", "Brandon Clarke", "Myles Block", "Matthew Getachew", "Malik Stewart"]

for name in names:
    account = AANumber(name)
    EXAMPLE_AA_NUMBERS.append(account.id)
    EXAMPLE_AA_ACCOUNTS.append(account)