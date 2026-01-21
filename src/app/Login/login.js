import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Aquí irá la lógica de autenticación
    console.log('Login:', { email, password });
  };

  return (
    <div>
      <div>
        <h2>Iniciar Sesión</h2>
        
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button onClick={handleSubmit}>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}