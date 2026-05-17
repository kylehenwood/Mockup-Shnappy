import { Navigate, type RouteObject } from 'react-router-dom';
import { AppShell } from './shell/AppShell';
import { SignIn } from './routes/auth/SignIn';
import { SignUp } from './routes/auth/SignUp';
import { Clients } from './routes/studio/Clients';
import { ClientsCreate } from './routes/studio/ClientsCreate';
import { ClientsAdd } from './routes/studio/ClientsAdd';
import { ClientDetail } from './routes/studio/ClientDetail';
import { Contacts } from './routes/studio/Contacts';
import { ContactsAdd } from './routes/studio/ContactsAdd';
import { ContactDetail } from './routes/studio/ContactDetail';
import { Activity } from './routes/studio/Activity';
import { Studio, StudioSettingsLayout } from './routes/studio/Studio';
import { StudioDefaults } from './routes/studio/StudioDefaults';
import { StudioWatermark } from './routes/studio/StudioWatermark';
import { StudioWebsite } from './routes/studio/StudioWebsite';
import { Profile } from './routes/account/Profile';
import { Billing } from './routes/account/Billing';
import { BillingSelect } from './routes/account/BillingSelect';
import { BillingPayment } from './routes/account/BillingPayment';
import { BillingFinal } from './routes/account/BillingFinal';
import { Storage } from './routes/account/Storage';
import { Notifications } from './routes/account/Notifications';
import { GalleryLogin } from './routes/gallery/GalleryLogin';
import { GalleryAlbums } from './routes/gallery/GalleryAlbums';
import { ComponentLibrary } from './routes/ComponentLibrary';

export const routes: RouteObject[] = [
  { path: '/sign-in', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
  { path: '/gallery/login', element: <GalleryLogin /> },
  { path: '/gallery/albums', element: <GalleryAlbums /> },
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/studio/clients" replace /> },
      { path: 'studio/clients', element: <Clients /> },
      { path: 'studio/clients/create', element: <ClientsCreate /> },
      { path: 'studio/clients/add', element: <ClientsAdd /> },
      { path: 'studio/clients/:id', element: <ClientDetail /> },
      { path: 'studio/activity', element: <Activity /> },
      { path: 'studio/contacts', element: <Contacts /> },
      { path: 'studio/contacts/add', element: <ContactsAdd /> },
      { path: 'studio/contacts/:id', element: <ContactDetail /> },
      {
        path: 'studio/settings',
        element: <StudioSettingsLayout />,
        children: [
          { index: true, element: <Studio /> },
          { path: 'defaults', element: <StudioDefaults /> },
          { path: 'watermark', element: <StudioWatermark /> },
          { path: 'website', element: <StudioWebsite /> },
        ],
      },
      { path: 'account/profile', element: <Profile /> },
      { path: 'account/notifications', element: <Notifications /> },
      { path: 'account/storage', element: <Storage /> },
      { path: 'account/billing', element: <Billing /> },
      { path: 'account/billing/select', element: <BillingSelect /> },
      { path: 'account/billing/payment', element: <BillingPayment /> },
      { path: 'account/billing/final', element: <BillingFinal /> },
      { path: '__components', element: <ComponentLibrary /> },
    ],
  },
];
