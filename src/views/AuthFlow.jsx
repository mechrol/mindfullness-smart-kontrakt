import React, { useState, useCallback } from 'react';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import Forgot from './auth/Forgot.jsx';
import Reset from './auth/Reset.jsx';
import MfaVerify from './auth/MfaVerify.jsx';
import VerifyEmail from './auth/VerifyEmail.jsx';

function readQuery(key) {
  try { return new URLSearchParams(window.location.search).get(key); } catch { return null; }
}

export default function AuthFlow({ onAuth }) {
  const token = readQuery('token');
  const [view, setView] = useState(token ? 'reset' : 'login');
  const go = useCallback((v) => setView(v), []);

  switch (view) {
    case 'register': return <Register onSwitch={go} navigate={go} onSuccess={onAuth} />;
    case 'forgot': return <Forgot onSwitch={go} />;
    case 'reset': return <Reset token={token || ''} onSwitch={go} />;
    case 'mfa': return <MfaVerify onSuccess={onAuth} onBack={() => go('login')} />;
    case 'verify-email': return <VerifyEmail email={readQuery('email') || ''} onSwitch={go} />;
    case 'login':
    default: return <Login onSwitch={go} navigate={go} onSuccess={onAuth} />;
  }
}
