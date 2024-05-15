import Link from 'next/link';

import { useState } from 'react';
import AdminGeneralSection from './AdminGeneralSection';
import AdminLogOutSection from './AdminLogOut';
const AdminSettings = () => {
  const [active, setActive] = useState('LogOut');
  const activeLink = 'font-semibold text-primary';

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            {/* <Link
              href="#"
              onClick={() => setActive('General')}
              className={active === 'General' ? activeLink : ''}
            >
              General
            </Link> */}
            <Link
              onClick={() => setActive('LogOut')}
              href="#"
              className={active === 'LogOut' ? activeLink : ''}
            >
              LogOut
            </Link>
          </nav>

          {/* admin general section  */}

          {active === 'General' && <AdminGeneralSection />}
          {active === 'LogOut' && <AdminLogOutSection />}
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;
