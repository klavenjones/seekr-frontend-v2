import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormValues {
  title: string;
  company: string;
  url?: string;
  source?: string;
  deadline?: string;
  status?: string;
  description?: string;
  location?: string;
  salary?: string;
}

interface Job {
  title: string;
  company: string;
  url?: string;
  source?: string;
  deadline?: string;
  status?: string;
  description?: string;
  location?: string;
  salary?: string;
}

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'wishlist', label: 'Wishlist' },
  { value: 'applied', label: 'Applied' },
  { value: 'interviews', label: 'Interviews' },
  { value: 'offers', label: 'Offers' },
  { value: 'rejected', label: 'Rejected' },
  { value: 'ghosted', label: 'Ghosted' },
];

interface JobFormProps {
  submitJob: (data: FormValues) => void;
  job?: Job;
}

interface JobFormFactoryProps extends JobFormProps {
  type: string;
}

const schema = yup
  .object({
    title: yup.string().required(),
    company: yup.string().required(),
  })
  .required();

export function AddJobForm({ submitJob }: JobFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  return (
    <form className="">
      <div className="my-6">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Job Title
        </label>
        <div className="mt-1">
          <input
            {...register('title')}
            type="text"
            name="title"
            id="title"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Software Engineer"
          />
        </div>
        {errors.title && <span className="block my-3 text-red-600">Job title is required</span>}
      </div>
      <div className="my-6">
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
        {errors.company && <span className="block my-3 text-red-600">Company name is required</span>}
      </div>
      <div className="my-6 space-y-6 grid gap-x-4 grid-cols-1 sm:grid-cols-3 sm:space-y-0">
        <div>
          <label htmlFor="source" className="block text-sm font-medium text-gray-700">
            Job Posting Source
          </label>
          <div className="mt-1">
            <input
              {...register('source')}
              type="text"
              name="source"
              id="source"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="LinkedIN"
            />
          </div>
        </div>
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            Job Posting URL
          </label>
          <div className="mt-1">
            <input
              {...register('url')}
              type="text"
              name="url"
              id="url"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="https//job-posting-url-example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Deadline
          </label>
          <div className="mt-1">
            <input
              {...register('deadline')}
              type="date"
              name="deadline"
              id="deadline"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="01-27-2023"
            />
          </div>
        </div>
      </div>
      <div className="my-6 space-y-6 grid gap-x-4 sm:grid-cols-3 sm:space-y-0">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <div className="mt-1">
            <input
              {...register('location')}
              type="text"
              name="location"
              id="location"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Brooklyn, NY"
            />
          </div>
        </div>
        <div>
          <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
            Salary
          </label>
          <div className="mt-1">
            <input
              {...register('salary')}
              type="text"
              name="salary"
              id="salary"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="$85,000-$120000 a year"
            />
          </div>
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <div className="mt-1">
            <Controller
              control={control}
              name="status"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, name } }) => (
                <Select
                  onChange={onChange}
                  onBlur={onBlur}
                  options={options}
                  className="z-20 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  isSearchable={false}
                  name={name}
                  placeholder="Select Job Status"
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="my-6">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Add Notes about this job
        </label>
        <div className="mt-2">
          <textarea
            {...register('description')}
            rows={4}
            name="description"
            id="description"
            className="block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            defaultValue={''}
          />
        </div>
      </div>
      <div className="my-6">
        <button
          type="button"
          onClick={handleSubmit(submitJob)}
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Job
        </button>
      </div>
    </form>
  );
}

export function EditJobForm({ submitJob, job }: JobFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: job?.title,
      company: job?.company,
      url: job?.url,
      source: job?.source,
      deadline: job?.deadline,
      description: job?.description,
      location: job?.location,
      salary: job?.salary,
      // @ts-ignore
      status: { value: job?.status, label: job?.status },
    },
  });

  return (
    <form className="">
      <div className="my-6">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Job Title
        </label>
        <div className="mt-1">
          <input
            {...register('title')}
            type="text"
            name="title"
            id="title"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Software Engineer"
          />
        </div>
        {errors.title && <span className="block my-3 text-red-600">Job title is required</span>}
      </div>
      <div className="my-6">
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
        {errors.company && <span className="block my-3 text-red-600">Company name is required</span>}
      </div>
      <div className="my-6 space-y-6 grid gap-x-4 grid-cols-1 sm:grid-cols-3 sm:space-y-0">
        <div>
          <label htmlFor="source" className="block text-sm font-medium text-gray-700">
            Job Posting Source
          </label>
          <div className="mt-1">
            <input
              {...register('source')}
              type="text"
              name="source"
              id="source"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="LinkedIN"
            />
          </div>
        </div>
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            Job Posting URL
          </label>
          <div className="mt-1">
            <input
              {...register('url')}
              type="text"
              name="url"
              id="url"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="https//job-posting-url-example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Deadline
          </label>
          <div className="mt-1">
            <input
              {...register('deadline')}
              type="date"
              name="deadline"
              id="deadline"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="01-27-2023"
            />
          </div>
        </div>
      </div>
      <div className="my-6 space-y-6 grid gap-x-4 sm:grid-cols-3 sm:space-y-0">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <div className="mt-1">
            <input
              {...register('location')}
              type="text"
              name="location"
              id="location"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Brooklyn, NY"
            />
          </div>
        </div>
        <div>
          <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
            Salary
          </label>
          <div className="mt-1">
            <input
              {...register('salary')}
              type="text"
              name="salary"
              id="salary"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="$85,000-$120000 a year"
            />
          </div>
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <div className="mt-1">
            <Controller
              control={control}
              name="status"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, name }, formState: { defaultValues } }) => (
                <Select
                  onChange={onChange}
                  onBlur={onBlur}
                  defaultValue={defaultValues?.status}
                  // @ts-ignore
                  options={options}
                  className="z-20 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  isSearchable={false}
                  name={name}
                  placeholder="Select Job Status"
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="my-6">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Add Notes about this job
        </label>
        <div className="mt-2">
          <textarea
            {...register('description')}
            rows={4}
            name="description"
            id="description"
            className="block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            defaultValue={''}
          />
        </div>
      </div>
      <div className="my-6">
        <button
          type="button"
          onClick={handleSubmit(submitJob)}
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Edit Job
        </button>
      </div>
    </form>
  );
}

export function JobForm({ type, submitJob, job }: JobFormFactoryProps) {
  switch (type) {
    case 'Add':
      return <AddJobForm submitJob={submitJob} />;
      break;

    case 'Edit':
      return <EditJobForm submitJob={submitJob} job={job} />;
      break;

    default:
      return null;
      break;
  }
}
