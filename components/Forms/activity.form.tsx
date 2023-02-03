import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { capitalizeWords } from '@/utils/capitalizeWords';

interface FormValues {
  name: string;
  company: string;
  job_title?: string;
  type?: string;
  done?: boolean;
  note?: string;
  start?: Date;
  end?: Date;
}

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  {
    value: 'on site interview',
    label: 'On Site Interview',
  },
  { value: 'apply', label: 'Apply' },
  { value: 'follow up', label: 'Follow up' },
  {
    value: 'prep cover letter',
    label: 'Prep Cover Letter',
  },
  { value: 'prep resume', label: 'Prep Resume' },
  { value: 'reach out', label: 'Reach out' },
  {
    value: 'prep for interview',
    label: 'Prep For Interview',
  },
  {
    value: 'phone interview',
    label: 'Phone Interview',
  },
  {
    value: 'offer received',
    label: 'Offer received',
  },
  {
    value: 'accept offer',
    label: 'Accept offer',
  },
  {
    value: 'decline offer',
    label: 'Decline offer',
  },
  {
    value: 'rejected',
    label: 'Rejected',
  },
  {
    value: 'rejected',
    label: 'Rejected',
  },
  {
    value: 'send thank you',
    label: 'Send thank you',
  },
  {
    value: 'email',
    label: 'Email',
  },
  {
    value: 'meeting',
    label: 'Meeting',
  },
  {
    value: 'phone call',
    label: 'Phone call',
  },
  {
    value: 'get reference',
    label: 'Get reference',
  },
  {
    value: 'send availability',
    label: 'Send Availability',
  },
  {
    value: 'assignment',
    label: 'Assignment',
  },
  {
    value: 'networking event',
    label: 'Networking event',
  },
  {
    value: 'other',
    label: 'Other',
  },
  {
    value: 'application withdrawn',
    label: 'Application Withdrawn',
  },
];

interface Activity {
  name: string;
  company: string;
  job_title: string;
  start: Date;
  end: Date;
  done: boolean;
  type: string;
  note: string;
}

interface ActivityFormProps {
  submitActivity: (data: FormValues) => void;
  activity?: Activity;
}

interface ActivityFormFactoryProps extends ActivityFormProps {
  type: string;
}

yup.setLocale({
  mixed: {
    required: 'This field is required.',
  },
  number: {
    min: 'Must be at least 2 characters',
  },
});

const schema = yup
  .object({
    name: yup.string().min(2).max(35).required(),
    company: yup.string().min(2).max(35),
    job_title: yup.string().min(2).max(35),
  })
  .required();

export function AddActivityForm({ submitActivity }: ActivityFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const [done, setDone] = useState(false);

  return (
    <form>
      <div className="my-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Activity Name
        </label>
        <div className="mt-1">
          <input
            {...register('name')}
            type="text"
            name="name"
            id="name"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Prep Resume"
          />
        </div>
        <span className="block my-3 text-red-600">{errors.name?.message}</span>
      </div>

      <div className="my-6 space-y-6 grid gap-x-4 grid-cols-1 sm:grid-cols-2 sm:space-y-0">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <div className="mt-1">
            <input
              {...register('company')}
              type="text"
              name="company"
              id="company"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="ACME Co."
            />
          </div>
          <span className="block my-3 text-red-600">{errors.company?.message}</span>
        </div>
        <div>
          <label htmlFor="job_title" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <div className="mt-1">
            <input
              {...register('job_title')}
              type="text"
              name="job_title"
              id="job_title"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Software Engineer Role"
            />
          </div>
          <span className="block my-3 text-red-600">{errors.job_title?.message}</span>
        </div>
      </div>

      <div className="my-6 space-y-6 grid gap-x-4 grid-cols-1 sm:grid-cols-3 sm:space-y-0">
        <div>
          <label htmlFor="start" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <div className="mt-1">
            <input
              {...register('start')}
              type="date"
              name="start"
              id="start"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="01-27-2023"
            />
          </div>
        </div>

        <div>
          <label htmlFor="end" className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <div className="mt-1">
            <input
              {...register('end')}
              type="date"
              name="end"
              id="end"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="01-27-2024"
            />
          </div>
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Activity type
          </label>
          <div className="mt-1">
            <Controller
              control={control}
              name="type"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, name } }) => (
                <Select
                  onChange={onChange}
                  onBlur={onBlur}
                  options={options}
                  className="z-20 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  isSearchable={false}
                  name={name}
                  placeholder="Select Activity"
                />
              )}
            />
          </div>
        </div>
      </div>

      <div className="my-6">
        <fieldset className="space-y-">
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                {...register('done')}
                id="activity"
                aria-describedby="activity-completion"
                name="activity"
                type="checkbox"
                checked={done}
                onChange={() => {
                  setDone(!done);
                  setValue('done', !done);
                }}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="activity" className="font-medium text-gray-700">
                Completed
              </label>
              <span id="activity-completetion" className="text-gray-500">
                <span className="sr-only"> Completed </span> Did you complete this activity
              </span>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="my-6">
        <label htmlFor="note" className="block text-sm font-medium text-gray-700">
          Add Notes about this actvity
        </label>
        <div className="mt-2">
          <textarea
            {...register('note')}
            rows={4}
            name="note"
            id="note"
            className="block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            defaultValue={''}
          />
        </div>
      </div>

      <div className="my-6">
        <button
          type="button"
          onClick={handleSubmit(submitActivity)}
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Activity
        </button>
      </div>
    </form>
  );
}

export function EditActivityForm({ submitActivity, activity }: ActivityFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: activity?.name,
      company: activity?.company,
      job_title: activity?.job_title,
      start: activity?.start,
      end: activity?.end,
      done: activity?.done,
      //@ts-ignore
      type: { value: activity?.type, label: capitalizeWords(activity?.type) },
      note: activity?.note,
    },
  });

  const [done, setDone] = useState<boolean>(() => {
    return activity?.done ? activity?.done : false;
  });

  return (
    <form>
      <div className="my-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Activity Name
        </label>
        <div className="mt-1">
          <input
            {...register('name')}
            type="text"
            name="name"
            id="name"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Prep Resume"
          />
        </div>
        <span className="block my-3 text-red-600">{errors.name?.message}</span>
      </div>

      <div className="my-6 space-y-6 grid gap-x-4 grid-cols-1 sm:grid-cols-2 sm:space-y-0">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <div className="mt-1">
            <input
              {...register('company')}
              type="text"
              name="company"
              id="company"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="ACME Co."
            />
          </div>
          <span className="block my-3 text-red-600">{errors.company?.message}</span>
        </div>
        <div>
          <label htmlFor="job_title" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <div className="mt-1">
            <input
              {...register('job_title')}
              type="text"
              name="job_title"
              id="job_title"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Software Engineer Role"
            />
          </div>
          <span className="block my-3 text-red-600">{errors.job_title?.message}</span>
        </div>
      </div>

      <div className="my-6 space-y-6 grid gap-x-4 grid-cols-1 sm:grid-cols-3 sm:space-y-0">
        <div>
          <label htmlFor="start" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <div className="mt-1">
            <input
              {...register('start')}
              type="date"
              name="start"
              id="start"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="01-27-2023"
            />
          </div>
        </div>

        <div>
          <label htmlFor="end" className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <div className="mt-1">
            <input
              {...register('end')}
              type="date"
              name="end"
              id="end"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="01-27-2024"
            />
          </div>
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Activity type
          </label>
          <div className="mt-1">
            <Controller
              control={control}
              name="type"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, name }, formState: { defaultValues } }) => (
                <>
                  <Select
                    onChange={onChange}
                    onBlur={onBlur}
                    // @ts-ignore
                    options={options}
                    className="z-20 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    isSearchable={false}
                    defaultValue={defaultValues?.type}
                    name={name}
                    placeholder="Select Activity"
                  />
                </>
              )}
            />
          </div>
        </div>
      </div>

      <div className="my-6">
        <fieldset className="space-y-">
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                {...register('done')}
                id="activity"
                aria-describedby="activity-completion"
                name="activity"
                type="checkbox"
                checked={done}
                onChange={() => {
                  setDone(!done);
                  setValue('done', !done);
                }}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="activity" className="font-medium text-gray-700">
                Completed
              </label>
              <span id="activity-completetion" className="text-gray-500">
                <span className="sr-only"> Completed </span> Did you complete this activity
              </span>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="my-6">
        <label htmlFor="note" className="block text-sm font-medium text-gray-700">
          Add Notes about this actvity
        </label>
        <div className="mt-2">
          <textarea
            {...register('note')}
            rows={4}
            name="note"
            id="note"
            className="block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            defaultValue={''}
          />
        </div>
      </div>

      <div className="my-6">
        <button
          type="button"
          onClick={handleSubmit(submitActivity)}
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Activity
        </button>
      </div>
    </form>
  );
}

export function ActivityForm({ type, submitActivity, activity }: ActivityFormFactoryProps) {
  switch (type) {
    case 'Add':
      return <AddActivityForm submitActivity={submitActivity} />;
      break;

    case 'Edit':
      return <EditActivityForm submitActivity={submitActivity} activity={activity} />;
      break;

    default:
      return null;
      break;
  }
}
