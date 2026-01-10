import {useEffect} from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Components/Common/Button';
import error from "../../images/404.png"

const Error = () => {

    useEffect(() => {
        document.title = "الصفحة غير موجودة | معادن البركة";
    }, []);

    return (
        <div  className="bg-backGroundColor pt-40 pb-20 min-h-screen">
            <div className="container mx-auto px-10 flex flex-col-reverse gap-10 md:flex-row md:justify-between md:items-center">
                <div className="flex justify-center">
                    <img src={error} alt="error" className="rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.30)] border-l-8 border-l-primary w-[300px] sm:w-[350px] md:w-[500px] lg:w-[350px] "/>
                </div>
                <div dir='rtl' className="text-center flex flex-col gap-6">
                    <h1 className="font-bold text-6xl">404</h1>
                    <h2 className="font-bold text-4xl">الصفحة غير موجودة !</h2>
                   
                    <p className="font-medium text-xl">الصفحة التي طلبتها غير موجودة تسطيع العودة للصفحة الرئيسية بالضغط على الزر </p>
                    <Link to="/">
                        <Button buttonName="الصفحة الرئيسية" buttonStyle="mainStyle"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Error;


