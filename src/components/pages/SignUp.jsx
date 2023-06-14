import { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const data = await res.json();

    if (data.error) {
      const key = Object.keys(error);
      setError(error[key][0]);
    } else {
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.token));
      setEmail('');
      setPassword('');
      window.location.href = '/';
    }
  };

  return (
    <div className="auth_container">
      <form onSubmit={handleSubmit} className="auth_form">
        <h1 className="text-xl font-black mb-5">Sign Up</h1>

        <input type="text" className="form_input" onChange={(element) => setName(element.target.value)} placeholder="Name" value={name} required />

        <input type="email" className="form_input" onChange={(element) => setEmail(element.target.value)} placeholder="Email" value={email} required />

        <input type="password" className="form_input" onChange={(element) => setPassword(element.target.value)} placeholder="Password" value={password} required />

        <div className="flex justify-between items-center">
          <button className="outline_btn" type="submit">Sign Up</button>
          <div className="alt">
            Already have an account?&nbsp;
            <a href="/login" className="text-primary">
              Login
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;