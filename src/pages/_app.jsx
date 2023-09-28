import { useState } from 'react';
import '../styles/tailwind.css';
import { ProviderAuth } from '@hooks/useAuth';

function MyApp({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ProviderAuth>
      <Component {...pageProps} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </ProviderAuth>
  );
}

export default MyApp;
