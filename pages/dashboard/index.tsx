import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { getActivities, getJobs, editActivity } from '@/utils/supabaseRequests';
import { buildClerkProps, clerkClient, getAuth } from '@clerk/nextjs/server';
import { User } from '@clerk/nextjs/dist/api';
import { Navigation } from '@/components/Layout';
import { ActivityForm } from '@/components/Forms/activity.form';

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

  if (user) {
    return { props: { ...buildClerkProps(req, { user }), allJobs, allActivities } };
  }
};

export default function DashboardHome({ allJobs, allActivities }) {
  const { userId, getToken } = useAuth();
  const [jobs] = useState(allJobs);
  const [activities, setActivities] = useState(allActivities);

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

  const handleEditActivity = async activityData => {
    const token = await getToken({ template: 'supabase' });
    const currentActivityState = activities;
    token ? await editActivity({ token, userId, activityData, activityId: 6 }) : null;
    //For Optimistic Update to the UI we need to replace the object being updated for now
    const oldIndex = currentActivityState.findIndex(el => el.id === 6);
    currentActivityState[oldIndex] = { id: 6, ...activityData };
    setActivities([...currentActivityState]);
  };

  return (
    <Navigation navigation={navigation} pageName="Dashboard">
      <p>
        This will be the dashboard for your Seekr Application, this will contain 5 recent jobs, contacts, and activities
      </p>
      {/* Add Job Form */}
      <ActivityForm type="Edit" submitActivity={handleEditActivity} activity={activities[activities.length - 1]} />
      {/* End of Add Job Form */}
      <div className="h-96 mt-10 grid grid-cols-2 border">
        {/* Job List */}
        <div className="border">
          {jobs &&
            jobs.map(job => (
              <p key={job?.id}>
                {job.title} - {job?.company}
              </p>
            ))}
        </div>
        <div className="border">
          {activities &&
            activities.map(activity => (
              <p key={activity?.id}>
                {activity.name} - {activity?.company}
              </p>
            ))}
        </div>
      </div>
    </Navigation>
  );
}
