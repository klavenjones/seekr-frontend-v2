import { UserProfile } from '@clerk/nextjs';
import { Navigation } from '@/components/Layout';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Jobs', href: '#', current: true },
  { name: 'Activities', href: '#', current: false },
  { name: 'Contacts', href: '#', current: false },
];

export default function Profile() {
  return (
    <Navigation navigation={navigation}>
      <UserProfile
        appearance={{
          elements: {
            rootBox: 'w-full',
            card: 'w-full',
          },
        }}
        path="dashboard/profile"
      />
    </Navigation>
  );
}
