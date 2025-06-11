import { Button } from "@material-tailwind/react";

const FooterForm = () => {
    return <>
        <div className="rounded-r-lg w-full h-full overflow-hidden bg-[linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.4)),url('/images/bg-form.png')]  bg-no-repeat bg-cover bg-bottom-right p-4 border border-solid border-l-0 border-gray-200">
            <p className="font-bold text-[16px]">Talk To Us Now For</p>
            <h2 className="font-bold text-[24px]">Get Recent Updates</h2>
            <p className="font-semibold">Keep up-to-date with the latest in lighting.</p>

            <div className="w-full md:w-3/4 my-2 gap-y-3 grid grid-cols-1">
                <input type="text" placeholder="Enter Name" className="bg-white rounded-md py-2 px-3 border border-solid border-gray-200 w-full outline-none" />
                <input type="text" placeholder="Enter Email" className="bg-white rounded-md py-2 px-3 border border-solid border-gray-200 w-full outline-none" />
            </div>

            <Button
                className="bg-main-color text-white py-2 px-4 capitalize font-medium rounded-md cursor-pointer shadow-sm"
            >Submit</Button>
        </div>
    </>
}

export default FooterForm;