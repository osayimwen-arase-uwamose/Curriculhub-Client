import AuthLayout from "../components/auth/AuthLayout.jsx";

import RegisterForm from "../components/auth/RegisterForm.jsx";

import Card from "../components/ui/Card.jsx";

import Heading from "../components/ui/Heading.jsx";

const RegisterPage = () => {
  return (
    <AuthLayout>

      <Card className="p-8">

        <div className="mb-8 text-center">
          <Heading
            as="h1"
            className="
              text-4xl
              tracking-tight
            "
          >
            CurriculHub
          </Heading>

          <p
            className="
              mt-2
              text-on-surface-variant
            "
          >
            Initialize your academic profile.
          </p>
        </div>

        <RegisterForm />

      </Card>

    </AuthLayout>
  );
};

export default RegisterPage;