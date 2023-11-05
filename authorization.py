from pymongo import MongoClient

# Initialize MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']
accounts = db['accounts']

def verify_user(aa_number, last_name, password):
    # Search for the aa_number in the accounts collection
    user = accounts.find_one({'aa_number': aa_number})

    if user:
        # If a user is found, compare last name and password
        if user['name'].split(' ')[1] == last_name and user['password'] == password:
            return user
        else:
            return False
    else:
        return False

# Example usage
if __name__ == "__main__":
    user = verify_user('X989UT2', 'Taylor', 'password456')
    if user != False:
        print(user)
    else:
        print("Invalid Credentials")
