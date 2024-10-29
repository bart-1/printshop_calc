import { ChangeEvent, FormEvent, useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import InputLabel from "../../Components/InputLabel";
import TextInput from "../../Components/TextInput";
import InputError from "../../Components/InputError";
import PrimaryButton from "../../Components/PrimaryButton";
import MasterLayout from "../../Layouts/MasterLayout";

interface ResetPasswordProps {
    token: string;
    email: string;
}

export default function ResetPassword({ token, email }:ResetPasswordProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e:FormEvent) => {
        e.preventDefault();

        post(route("password.store"));
    };

    return (
        <MasterLayout>
            <Head title="Reset Password" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setData("email", e.currentTarget.value)
                        }
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        isFocused={true}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setData("password", e.currentTarget.value)
                        }
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setData(
                                "password_confirmation",
                                e.currentTarget.value
                            )
                        }
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Reset Password
                    </PrimaryButton>
                </div>
            </form>
        </MasterLayout>
    );
}
