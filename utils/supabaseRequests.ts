import { supabaseClient } from './supabaseClient';
import React from 'react';

interface UserCredentials {
  userId: string | null | undefined;
  token: string;
}

interface AddJob {
  userId: string | null | undefined;
  token: string;
  jobData: {
    title?: string;
    company?: string;
    url?: string;
    source?: string;
    salary?: string;
    description?: string;
    deadline?: string;
    status?: { value: string; label: string };
    location?: string;
  };
}
interface AddContact {
  userId: string | null | undefined;
  token: string;
  contactData: {
    name: string;
    company?: string;
    title?: string;
    email?: string;
    phone?: string;
    location?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    personalWebsite?: string;
    note?: string;
  };
}

interface AddActivity {
  userId: string | null | undefined;
  token: string;
  activityData: {
    name?: string;
    company?: string;
    job_title?: string;
    start?: Date;
    end?: Date;
    done?: boolean;
    note?: string;
    type?: { value: string; label: string };
  };
}

interface EditJob extends AddJob {
  jobId: number;
}

interface EditActivity extends AddActivity {
  activityId: number;
}

interface EditContact extends AddContact {
  contactId: number;
}

export const getJobs = async ({ userId, token }: UserCredentials) => {
  const supabase = await supabaseClient(token);
  const { data: jobs } = await supabase.from('Jobs').select('*').eq('user_id', userId);
  return jobs;
};

export const addJob = async ({ userId, token, jobData }: AddJob) => {
  const supabase = await supabaseClient(token!);
  const { data, error } = await supabase.from('Jobs').insert({
    user_id: userId,
    title: jobData?.title,
    company: jobData?.company,
    url: jobData?.url,
    source: jobData?.source,
    status: jobData?.status?.value,
    deadline: jobData?.deadline,
    location: jobData?.location,
    description: jobData?.description,
    salary: jobData?.salary,
  });

  if (error) {
    console.log(error);
  }

  return data;
};

export const editJob = async ({ userId, token, jobData, jobId }: EditJob) => {
  const supabase = await supabaseClient(token!);
  const { data, error } = await supabase.from('Jobs').upsert({
    id: jobId,
    user_id: userId,
    title: jobData?.title,
    company: jobData?.company,
    url: jobData?.url,
    source: jobData?.source,
    status: jobData?.status?.value,
    deadline: jobData?.deadline,
    location: jobData?.location,
    description: jobData?.description,
    salary: jobData?.salary,
  });

  if (error) {
    console.log(error);
  }

  return data;
};

export const getActivities = async ({ userId, token }: UserCredentials) => {
  const supabase = await supabaseClient(token);
  const { data: activities } = await supabase.from('Activities').select('*').eq('user_id', userId);
  return activities;
};

export const addActivity = async ({ userId, token, activityData }: AddActivity) => {
  const supabase = await supabaseClient(token!);
  console.log(activityData);
  const { data, error } = await supabase.from('Activities').insert({
    user_id: userId,
    name: activityData?.name,
    company: activityData?.company,
    job_title: activityData?.job_title,
    start: activityData.start ? activityData.start : null,
    end: activityData.end ? activityData.end : null,
    type: activityData?.type?.value,
    note: activityData?.note,
    done: activityData?.done,
  });

  if (error) {
    console.log(error);
  }

  return data;
};

export const editActivity = async ({ userId, token, activityData, activityId }: EditActivity) => {
  const supabase = await supabaseClient(token!);
  const { data, error } = await supabase.from('Activities').upsert({
    id: activityId,
    user_id: userId,
    name: activityData?.name,
    company: activityData?.company,
    job_title: activityData?.job_title,
    start: activityData.start ? activityData.start : null,
    end: activityData.end ? activityData.end : null,
    type: activityData?.type?.value,
    note: activityData?.note,
    done: activityData?.done,
  });

  if (error) {
    console.log(error);
  }

  return data;
};

export const getContacts = async ({ userId, token }: UserCredentials) => {
  const supabase = await supabaseClient(token);
  const { data: contacts } = await supabase.from('Contacts').select('*').eq('user_id', userId);
  return contacts;
};

export const addContact = async ({ userId, token, contactData }: AddContact) => {
  const supabase = await supabaseClient(token!);
  const { data, error } = await supabase.from('Contacts').insert({
    user_id: userId,
    name: contactData?.name,
    company: contactData?.company,
    title: contactData?.title,
    email: contactData?.email,
    phone: contactData?.phone,
    location: contactData?.location,
    twitter: contactData?.twitter,
    linkedin: contactData?.linkedin,
    github: contactData?.github,
    personal_website: contactData?.personalWebsite,
    note: contactData?.note,
  });

  if (error) {
    console.log(error);
  }

  return data;
};

export const editContact = async ({ userId, token, contactData, contactId }: EditContact) => {
  const supabase = await supabaseClient(token!);
  const { data, error } = await supabase.from('Contacts').upsert({
    id: contactId,
    name: contactData?.name,
    company: contactData?.company,
    title: contactData?.title,
    email: contactData?.email,
    phone: contactData?.phone,
    location: contactData?.location,
    twitter: contactData?.twitter,
    linkedin: contactData?.linkedin,
    github: contactData?.github,
    personal_website: contactData?.personalWebsite,
    note: contactData?.note,
  });

  if (error) {
    console.log(error);
  }

  return data;
};
