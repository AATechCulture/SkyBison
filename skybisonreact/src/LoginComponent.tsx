import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// const Login: React.FC = () => {
//   const [aaNumber, setAaNumber] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const authenticateUser = () => {
//     // Here you would have an API call to your backend for authentication
//     // For now, we'll just simulate successful login if fields are not empty
//     if (aaNumber && firstName && lastName) {
//       setIsLoggedIn(true);
//     } else {
//       alert('Please enter all fields');
//     }
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     authenticateUser();
//   };

//   if (isLoggedIn) {
//     // Redirect to the FlightMap page on successful login
//     return <Navigate to="/flightmap" replace />;
//   }

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>AA Number:</label>
//           <input
//             type="text"
//             value={aaNumber}
//             onChange={(e) => setAaNumber(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input
//             type="text"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
const Login = () => {
  const [formData, setFormData] = useState({
    aa_number: '',
    last_name: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = async () => {
    const url = 'http://localhost:8080/login';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>
          AA Number:
          <input
            id="aaNumber"
            type="text"
            name="aa_number"
            value={formData.aa_number}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            id="firstName"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
