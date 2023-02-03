import { useState } from 'react';
import { getActivities, getJobs, getContacts } from '@/utils/supabaseRequests';
import { buildClerkProps, clerkClient, getAuth } from '@clerk/nextjs/server';
import { User } from '@clerk/nextjs/dist/api';
import { Navigation } from '@/components/Layout';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Jobs', href: '#', current: true },
  { name: 'Activities', href: '#', current: false },
  { name: 'Contacts', href: '#', current: false },
];

export const getServerSideProps = async ({ req }) => {
  const { userId } = getAuth(req);
  const user: User | null = userId ? await clerkClient.users.getUser(userId) : null;
  const token: string | null = await getAuth(req).getToken({ template: 'supabase' });

  const allJobs = token ? await getJobs({ userId, token }) : null;
  const allActivities = token ? await getActivities({ userId, token }) : null;
  const allContacts = token ? await getContacts({ userId, token }) : null;

  if (user) {
    return { props: { ...buildClerkProps(req, { user }), allJobs, allActivities, allContacts } };
  }
};

export default function DashboardHome({ allJobs, allActivities, allContacts }) {
  const [jobs] = useState(allJobs);
  const [activities] = useState(allActivities);
  const [contacts] = useState(allContacts);

  // const handleAddJob = async jobData => {
  //   const token = await getToken({ template: 'supabase' });
  //   console.log(token);
  //   token ? await addJob({ token, userId, jobData }) : null;
  //   console.log(data);
  //   setJobs([...jobs, jobData]);
  // };

  // const handleEditJob = async jobData => {
  //   const token = await getToken({ template: 'supabase' });
  //   const currentJobState = jobs;
  //   token ? await editJob({ token, userId, jobData, jobId: 13 }) : null;
  //   //For Optimistic Update to the UI we need to replace the object being updated for now
  //   const oldIndex = currentJobState.findIndex(el => el.id === 13);
  //   currentJobState[oldIndex] = { id: 13, ...jobData };
  //   setJobs([...currentJobState]);
  // };

  // const handleAddActivity = async activityData => {
  //   const token = await getToken({ template: 'supabase' });
  //   token ? await addActivity({ token, userId, activityData }) : null;
  //   setActivities([...activities, activityData]);
  // };

  // const handleEditActivity = async activityData => {
  //   const token = await getToken({ template: 'supabase' });
  //   const currentActivityState = activities;
  //   token ? await editActivity({ token, userId, activityData, activityId: 6 }) : null;
  //   //For Optimistic Update to the UI we need to replace the object being updated for now
  //   const oldIndex = currentActivityState.findIndex(el => el.id === 6);
  //   currentActivityState[oldIndex] = { id: 6, ...activityData };
  //   setActivities([...currentActivityState]);
  // };

  // const handleAddContact = async contactData => {
  //   const token = await getToken({ template: 'supabase' });
  //   console.log(token);
  //   token ? await addContact({ token, userId, contactData }) : null;
  //   setContacts([...contacts, contactData]);
  // };

  // const handleEditContact = async contactData => {
  //   const token = await getToken({ template: 'supabase' });
  //   const currentContactState = contacts;
  //   token ? await editContact({ token, userId, contactData, contactId: 3 }) : null;
  //   //For Optimistic Update to the UI we need to replace the object being updated for now
  //   const oldIndex = currentContactState.findIndex(el => el.id === 3);
  //   currentContactState[oldIndex] = { id: 3, ...contactData };
  //   setContacts([...currentContactState]);
  // };

  return (
    <Navigation navigation={navigation} pageName="Dashboard">
      <p>
        This will be the dashboard for your Seekr Application, this will contain 5 recent jobs, contacts, and activities
      </p>
      <div className="h-96 mt-10 grid sm:grid-cols-2 gap-3">
        {/* Job List */}
        <div className="border-2 p-3">
          <h1 className="text-3xl mb-4 font-bold">Jobs</h1>
          {jobs &&
            jobs.map(job => (
              <p className="mb-1 font-mono" key={job?.id}>
                {job.title} - {job?.company}
              </p>
            ))}
        </div>
        <div className="border-2 p-3">
          <h1 className="text-3xl mb-4 font-bold">Activities</h1>
          {activities &&
            activities.map(activity => (
              <p className="mb-1 font-mono" key={activity?.id}>
                {activity.name} - {activity?.company}
              </p>
            ))}
        </div>
        <div className="border-2 p-3">
          <h1 className="text-3xl mb-4 font-bold">Contacts</h1>
          {contacts &&
            contacts.map(contact => (
              <p className="mb-1 font-mono" key={contact?.id}>
                {contact.name} - {contact?.company}
              </p>
            ))}
        </div>
      </div>
    </Navigation>
  );
}
