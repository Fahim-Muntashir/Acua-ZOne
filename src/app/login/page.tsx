"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

type FormValues = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col items-center my-10">
            <h1 className="text-4xl mb-5 text-center">
                Login <span className="text-accent">Here</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1710130697~exp=1710134297~hmac=f1b21d9c1823a0657d339c256a1c4ad8301168480e35b35aeba5106568a21010&w=740"
                        width={500}
                        height={200}
                        alt="login page"
                        className="w-full max-w-md h-auto"
                    />
                </div>

                <div className="card w-full h-full shadow-xl bg-base-100 flex justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full p-6">
                        <div className="mb-5">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="Email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password")}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-accent btn-outline w-full mb-6">
                            Login
                        </button>
                        <p className="text-center mb-4">
                            Don&apos;t have an account?{" "}
                            <Link className="text-accent" href="/register">
                                Create an account
                            </Link>
                        </p>
                    </form>
                    <p className="text-center mb-4">Or Sign Up Using</p>
                    <div className="flex justify-center mb-10 mt-2 gap-4">
                        <button className="btn btn-circle">
                            <Image
                                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                                width={30}
                                height={30}
                                alt="google logo"
                            />
                        </button>
                        <button className="btn btn-circle">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                width={30}
                                height={30}
                                alt="github logo"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
