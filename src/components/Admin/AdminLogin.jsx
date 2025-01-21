import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoHeader from '../../Pages/LogoHeader';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(''); // New state for success message
    const navigate = useNavigate();

    const styles = {
        adminLoginContainer: {
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            minHeight: 'calc(100vh - 80px)' // Account for footer height
        },
        formGroup: {
            marginBottom: '15px'
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '15px'
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
            width: '100%'
        },
        message: {
            color: 'red',
            marginTop: '10px',
            textAlign: 'center'
        },
        successMessage: { // New styles for success message
            color: 'green',
            marginTop: '10px',
            textAlign: 'center'
        },
        heading: {
            textAlign: 'center',
            marginBottom: '20px',
            color: '#333'
        },
        footer: {
            backgroundColor: '#333',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            height: '60px'
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setSuccessMessage(''); // Reset success message

        try {
            const response = await fetch('http://localhost:5000/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('adminToken', data.token);
                setSuccessMessage('Login successful!'); // Set success message
                setTimeout(() => {
                    navigate('/admin-dashboard');
                }, 2000); // Redirect after 2 seconds
            } else {
                setMessage(data.message || 'Login failed');
            }
        } catch (error) {
            setMessage('Error logging in');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <LogoHeader />
            <div style={styles.adminLoginContainer}>
                <h2 style={styles.heading}>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div style={styles.formGroup}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={loading}
                        style={{
                            ...styles.button,
                            backgroundColor: loading ? '#ccc' : '#007bff',
                            cursor: loading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                {message && <div style={styles.message}>{message}</div>}
                {successMessage && <div style={styles.successMessage}>{successMessage}</div>} {/* Display success message */}
            </div>
            {/* <footer style={styles.footer}>
                <p>© 2025 Admin Portal. All rights reserved.</p>
            </footer> */}
        </>
    );
};

export default AdminLogin;
