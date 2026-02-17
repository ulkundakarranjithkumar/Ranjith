import axios from 'axios';
import { useState } from 'react';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async () => {

        console.log("working")
        if (!name || !email || !password) {
            setError('All fields are required');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', {
                name, email, password
            });

            console.log(response.data);
            setSuccess('Registration successful! You can now log in.');
            setError('');
        } catch (err) {
            console.error(err);
            setError('An error occurred');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                padding: '40px',
                maxWidth: '450px',
                width: '100%'
            }}>
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '10px',
                    textAlign: 'center'
                }}>Create Account</h2>
                <p style={{
                    textAlign: 'center',
                    color: '#888',
                    marginBottom: '30px',
                    fontSize: '14px'
                }}>Join us today and get started</p>
                
                {error && <div style={{
                    backgroundColor: '#fee',
                    border: '1px solid #fcc',
                    color: '#c33',
                    padding: '12px',
                    borderRadius: '6px',
                    marginBottom: '15px',
                    fontSize: '14px'
                }}>{error}</div>}
                
                {success && <div style={{
                    backgroundColor: '#efe',
                    border: '1px solid #cfc',
                    color: '#3c3',
                    padding: '12px',
                    borderRadius: '6px',
                    marginBottom: '15px',
                    fontSize: '14px'
                }}>{success}</div>}
                
                <div style={{ marginBottom: '18px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: '#333',
                        fontWeight: '500',
                        fontSize: '14px'
                    }}>Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '6px',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                            transition: 'all 0.3s',
                            outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                        onBlur={(e) => e.target.style.borderColor = '#ddd'}
                    />
                </div>

                <div style={{ marginBottom: '18px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: '#333',
                        fontWeight: '500',
                        fontSize: '14px'
                    }}>Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '6px',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                            transition: 'all 0.3s',
                            outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                        onBlur={(e) => e.target.style.borderColor = '#ddd'}
                    />
                </div>

                <div style={{ marginBottom: '25px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: '#333',
                        fontWeight: '500',
                        fontSize: '14px'
                    }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '6px',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                            transition: 'all 0.3s',
                            outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                        onBlur={(e) => e.target.style.borderColor = '#ddd'}
                    />
                </div>

                <button
                    onClick={handleRegister}
                    style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#764ba2';
                        e.target.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.4)';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#667eea';
                        e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    Create Account
                </button>

                <p style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    color: '#888',
                    fontSize: '14px'
                }}>
                    Already have an account? <a href="/login" style={{
                        color: '#667eea',
                        textDecoration: 'none',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}>Sign in</a>
                </p>
            </div>
        </div>
    );
}