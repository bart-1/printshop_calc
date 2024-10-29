import { ChangeEvent, FormEvent, ReactNode, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "../../Components/InputLabel";
import TextInput from "../../Components/TextInput";
import InputError from "../../Components/InputError";
import Checkbox from "../../Components/Checkbox";
import PrimaryButton from "../../Components/PrimaryButton";
import MasterLayout from "../../Layouts/MasterLayout";

interface LoginProps {
    status: string;
    canResetPassword: boolean;
}

const Login = ({ status, canResetPassword }:LoginProps) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e:FormEvent) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-100 dark:bg-mygray-lighter shadow-md overflow-hidden sm:rounded-lg">
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel
                        htmlFor="email"
                        value="Email"
                        className="dark:text-white"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setData("email", e.currentTarget.value)
                        }
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 ">
                    <InputLabel
                        htmlFor="password"
                        value="Password"
                        className="dark:text-white"
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setData("password", e.currentTarget.value)
                        }
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setData("remember", e.currentTarget.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-white">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-white"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}

Login.layout = (page: ReactNode | ReactNode[]) => (
    <MasterLayout children={page} />
);


export default Login;
