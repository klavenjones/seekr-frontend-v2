import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormValues {
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
}

interface Contact {
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
}

interface ContactFormProps {
  submitContact: (data: FormValues) => void;
  contact?: Contact;
}

interface ContactFormFactoryProps extends ContactFormProps {
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
    company: yup.string().max(35),
    title: yup.string().max(35),
    email: yup.string().max(35).email(),
  })
  .required();

export function AddContactForm({ submitContact }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  return (
    <form>
      <div className="my-6 space-y-6 grid gap-x-4 grid-cols-1 sm:grid-cols-3 sm:space-y-0">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Contact Name
          </label>
          <div className="mt-1">
            <input
              {...register('name')}
              type="text"
              name="name"
              id="name"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="John Smith"
            />
          </div>
          <span className="block my-3 text-red-600">{errors.name?.message}</span>
        </div>
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
          <span className="block my-3 text-red-600">{errors.title?.message}</span>
        </div>
      </div>

      <div className="my-6 space-y-6 grid gap-x-4 grid-cols-1 sm:grid-cols-3 sm:space-y-0">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="mt-1">
            <input
              {...register('email')}
              type="email"
              name="email"
              id="email"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="someone@email.com"
            />
          </div>
          <span className="block my-3 text-red-600">{errors.email?.message}</span>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="mt-1">
            <input
              {...register('phone')}
              type="phone"
              name="phone"
              id="phone"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="555-555-5555"
            />
          </div>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <div className="mt-1">
            <input
              {...register('location')}
              type="location"
              name="location"
              id="location"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Brooklyn, NY"
            />
          </div>
        </div>
      </div>

      <div className="my-6 space-y-6 grid gap-x-4 grid-cols-1 sm:grid-cols-3 sm:space-y-0 sm:gap-y-6">
        <div>
          <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
            Twitter
          </label>
          <div className="mt-1">
            <input
              {...register('twitter')}
              type="text"
              name="twitter"
              id="twitter"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="someone@twitter.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="github" className="block text-sm font-medium text-gray-700">
            Github
          </label>
          <div className="mt-1">
            <input
              {...register('github')}
              type="text"
              name="github"
              id="github"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="https://github.com/someone"
            />
          </div>
        </div>

        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
            LinkedIn
          </label>
          <div className="mt-1">
            <input
              {...register('linkedin')}
              type="text"
              name="linkedin"
              id="linkedin"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="https://linkedin.com/in/someone"
            />
          </div>
        </div>

        <div className="my-6">
          <label htmlFor="personal" className="block text-sm font-medium text-gray-700">
            Personal Website
          </label>
          <div className="mt-1">
            <input
              {...register('personalWebsite')}
              type="text"
              name="personal"
              id="personal"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="https://someone.com/"
            />
          </div>
        </div>
      </div>

      <div className="my-6">
        <label htmlFor="note" className="block text-sm font-medium text-gray-700">
          Add Notes about this contact
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
          onClick={handleSubmit(submitContact)}
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Contact
        </button>
      </div>
    </form>
  );
}

export function EditContactForm({ submitContact, contact }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: contact?.name,
      company: contact?.company,
      title: contact?.title,
      email: contact?.email,
      phone: contact?.phone,
      twitter: contact?.twitter,
      linkedin: contact?.linkedin,
      github: contact?.github,
      personalWebsite: contact?.personalWebsite,
      note: contact?.note,
    },
  });

  return (
    <form>
      <div className="my-6 space-y-6 grid gap-x-4 grid-cols-1 sm:grid-cols-3 sm:space-y-0">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Contact Name
          </label>
          <div className="mt-1">
            <input
              {...register('name')}
              type="text"
              name="name"
              id="name"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="John Smith"
            />
          </div>
          <span className="block my-3 text-red-600">{errors.name?.message}</span>
        </div>
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
          <span className="block my-3 text-red-600">{errors.title?.message}</span>
        </div>
      </div>

      <div className="my-6 space-y-6 grid gap-x-4 grid-cols-1 sm:grid-cols-3 sm:space-y-0">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="mt-1">
            <input
              {...register('email')}
              type="email"
              name="email"
              id="email"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="someone@email.com"
            />
          </div>
          <span className="block my-3 text-red-600">{errors.email?.message}</span>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="mt-1">
            <input
              {...register('phone')}
              type="phone"
              name="phone"
              id="phone"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="555-555-5555"
            />
          </div>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <div className="mt-1">
            <input
              {...register('location')}
              type="location"
              name="location"
              id="location"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Brooklyn, NY"
            />
          </div>
        </div>
      </div>

      <div className="my-6 space-y-6 grid gap-x-4 grid-cols-1 sm:grid-cols-3 sm:space-y-0 sm:gap-y-6">
        <div>
          <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
            Twitter
          </label>
          <div className="mt-1">
            <input
              {...register('twitter')}
              type="text"
              name="twitter"
              id="twitter"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="someone@twitter.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="github" className="block text-sm font-medium text-gray-700">
            Github
          </label>
          <div className="mt-1">
            <input
              {...register('github')}
              type="text"
              name="github"
              id="github"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="https://github.com/someone"
            />
          </div>
        </div>

        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
            LinkedIn
          </label>
          <div className="mt-1">
            <input
              {...register('linkedin')}
              type="text"
              name="linkedin"
              id="linkedin"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="https://linkedin.com/in/someone"
            />
          </div>
        </div>

        <div>
          <label htmlFor="personal" className="block text-sm font-medium text-gray-700">
            Personal Website
          </label>
          <div className="mt-1">
            <input
              {...register('personalWebsite')}
              type="text"
              name="personal"
              id="personal"
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="https://someone.com/"
            />
          </div>
        </div>
      </div>

      <div className="my-6">
        <label htmlFor="note" className="block text-sm font-medium text-gray-700">
          Add Notes about this contact
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
          onClick={handleSubmit(submitContact)}
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Contact
        </button>
      </div>
    </form>
  );
}

export function ContactForm({ type, submitContact, contact }: ContactFormFactoryProps) {
  switch (type) {
    case 'Add':
      return <AddContactForm submitContact={submitContact} />;
      break;

    case 'Edit':
      return <EditContactForm submitContact={submitContact} contact={contact} />;
      break;

    default:
      return null;
      break;
  }
}
