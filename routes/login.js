import { accounts } from './db_connection.js';

const login = async (req, res) => {
    try {
        const { aa_number, last_name, password } = req.body;

        // Find the user with the provided aa_number
        const user = await accounts.findOne({ aa_number });

        if (!user) {
            return res.status(401).json({ message: 'Invalid AA number' });
        }

        // Check if last name and password match
        if (user.last_name !== last_name || user.password !== password) {
            return res.status(401).json({ message: 'Invalid last name or password' });
        }

        // Login successful
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default login;