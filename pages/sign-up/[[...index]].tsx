import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => (
  <div className="max-w-7xl mx-auto h-screen flex items-center justify-center">
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      redirectUrl="/dashboard"
    />
  </div>
);

export default SignUpPage;
