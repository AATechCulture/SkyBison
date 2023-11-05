import random, string
def generate_names():
    names = []
    first_names = ["Kennedy", "Malik", "Myles", "Brandon", "Matthew", "Tramia", "Deontae", "Ivy", "Aaron", "Spencer",
                "Caleb", "Asha", "Kendall", "Sade", "Dora", "Grant", "Nick", "John", "Kevin", "Steven"]
    last_names = ["Butts", "Stewart", "Block", "Clarke", "Getachew", "McGee", "Smith", "Lee", "Taylor", "Reed",
                "Martin", "Brown", "Bianca", "Black", "McKenzie", "Cain", "Tate", "Roberts", "Jackson", "Williams"] 
    for _ in range(40):
        first_name = random.choice(first_names)
        last_name = random.choice(last_names)
        names.append(f"{first_name} {last_name}")
    return names

def generate_id():
    numbers = ''.join(random.choices(string.digits, k=4))
    letters = ''.join(random.choices(string.ascii_uppercase, k=3))

    combined = list(numbers + letters)
    random.shuffle(combined)
    result = ''.join(combined)

    return result

def generate_password():
    numbers = ''.join(random.choices(string.digits, k=random.randint(1,10)))
    letters = ''.join(random.choices(string.ascii_uppercase, k=random.randint(1, 10)))

    combined = list(numbers + letters)
    random.shuffle(combined)
    result = ''.join(combined)

    return result

def generate_airport():
    airports = ['DCA', 'LAX', 'JFK', 'ORD', 'SFO', 'SEA']
    return random.choice(airports)

def generate_random_email():
    letters = string.ascii_letters
    digits = string.digits

    # Generate a random username with 8 characters
    username = ''.join(random.choice(letters + digits) for _ in range(8))

    # Generate a random domain name with 8 characters
    domain = ''.join(random.choice(letters) for _ in range(8))

    # Choose a random top-level domain (TLD)
    tlds = ['com', 'net', 'org', 'gov', 'edu']
    tld = random.choice(tlds)

    # Construct the email address
    email = f"{username}@{domain}.{tld}"

    return email

def generate_phone_number():
    area_code = random.randint(200, 999)  # Ensure a valid area code (exclude reserved codes)
    central_office_code = random.randint(200, 999)
    line_number = random.randint(1000, 9999)

    return f"({area_code}) {central_office_code}-{line_number}"

def generate_miles():
    return random.randint(100, 1000000)

def generate_loyalty_points():
    return random.randint(0, 500000)

def generate_account():
    account = {}
    account['name'] = random.choice(generate_names())
    account['aa_number'] = generate_id()
    account['email'] = generate_random_email()
    account['number'] = generate_phone_number()
    account['password'] = generate_password()
    account['preferred_airport'] = generate_airport()
    account['associated_cards'] = []
    account['reward_miles'] = generate_miles()
    account['loyalty_points'] = generate_loyalty_points()
    
    return account


    