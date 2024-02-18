import { FaDotCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaSquarePhoneFlip } from "react-icons/fa6";

const AboutUs = () => {
    return (
        <>
        <section className="">
            <div className="">
            <div className="container mx-auto py-[14vh]  items-center p-7 md:max-w-6xl flex flex-col  justify-center">
                <div className=" text-6xl  flex flex-col justify-center mt-10 mb-16 text-cyan-800">
                <span> About Us</span>
                <hr className="border-2 w-full border-cyan-800" />
                </div>
                <div className="flex my-8 m-auto justify-center ">
                {/** vertical line */}
                <div className="flex border rounded-full border-cyan-900 w-1">
                    <div className="h-full z-20 border-2 border-cyan-900 rounded-full"></div>
                </div>

                <div className="w-full ">
                    {/**Why Us? */}
                    <div className=" flex mb-3 items-center">
                    <div className=" flex items-center">
                        <hr className=" text-cyan-800 h-1 w-14 z-10 bg-cyan-800  border-cyan-800  " />
                        <FaDotCircle className=" w-auto text-cyan-800 left-3 bg-cyan-800  rounded-full" />
                    </div>
                    <div className=" ml-2 w-full text-2xl text-orange-600">
                        Why Us?
                    </div>
                    </div>
                    {/**Why Us? Detail */}
                    <div className="ml-24  text-md w-3/4 text-black">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellendus saepe, quae veritatis recusandae aspernatur ipsa
                    velit iste. Cumque, recusandae quos? Dolore ex, saepe pariatur
                    quaerat reprehenderit, iure quidem optio nesciunt laboriosam
                    animi neque. Molestias sit accusamus, sunt vel quaerat cum?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellendus saepe, quae veritatis recusandae aspernatur ipsa
                    velit iste. Cumque, recusandae quos? Dolore ex, saepe pariatur
                    quaerat reprehenderit, iure quidem optio nesciunt laboriosam
                    animi neque. Molestias sit accusamus, sunt vel quaerat cum?
                    </div>

                    {/**Our Partners */}
                    <div className=" flex mb-3 items-center">
                    <div className=" flex items-center">
                        <hr className=" text-cyan-800 h-1 w-14 z-10 bg-cyan-800  border-cyan-800  " />
                        <FaDotCircle className=" w-auto text-cyan-800 left-3 bg-cyan-800  rounded-full" />
                    </div>
                    <div className=" ml-2 w-full text-2xl text-orange-600">
                        Our Partners
                    </div>
                    </div>
                    {/**Our partners Detail */}
                    <div className="ml-24  text-md w-3/4">
                    <img
                        src="/img/about/partners.png"
                        alt="PartnerImg"
                        className="h-[10rem]"
                    />
                    </div>

                    {/**Follow Us */}
                    <div className=" flex mb-3 items-center">
                    <div className=" flex items-center">
                        <hr className=" text-cyan-800 h-1 w-14 z-10 bg-cyan-800  border-cyan-800  " />
                        <FaDotCircle className=" w-auto text-cyan-800 left-3 bg-cyan-800  rounded-full" />
                    </div>
                    <div className=" ml-2 w-full text-2xl text-orange-600">
                        Follow Us!
                    </div>
                    </div>
                    {/**Follow Us Detail */}
                    <div className="ml-24  text-md w-3/4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt deleniti excepturi sapiente nihil fugit in modi
                    voluptatem, consequuntur odit dolorem nesciunt quibusdam
                    earum! Corrupti at consequatur, hic fuga corporis quisquam
                    ipsum sit necessitatibus recusandae quam quis voluptas sed
                    dolore! Omnis maxime magnam, pariatur neque possimus
                    voluptatum eos dolore deleniti, perferendis quia quod hic
                    aperiam sint qui praesentium ex, soluta earum ut eum et
                    nostrum. Maxime recusandae magnam eius quibusdam explicabo!
                    </div>

                    {/**Contact Info */}
                    <div className=" flex mb-3 items-center">
                    <div className=" flex items-center">
                        <hr className=" text-cyan-800 h-1 w-14 z-10 bg-cyan-800  border-cyan-800  " />
                        <FaDotCircle className=" w-auto text-cyan-800 left-3 bg-cyan-800  rounded-full" />
                    </div>
                    <div className=" ml-2 w-full text-2xl text-orange-600">
                        Contact Info
                    </div>
                    </div>
                    {/**Contact Info Detail */}
                    <div className="ml-24  text-md w-3/4 text-black">
                    <a
                        href="#"
                        className=" flex items-center justify-start cursor-pointer"
                    >
                        <IoHome className=" text-black" />
                        <span className=" mx-4">India, Delhi</span>
                    </a>
                    <br />
                    <a
                        href="#"
                        className=" flex items-center justify-start cursor-pointer"
                    >
                        <IoIosMail className=" text-black" />
                        <span className=" mx-4">FoodHunt@gmail.com</span>
                    </a>
                    <br />
                    <a
                        href="#"
                        className=" flex items-center justify-start cursor-pointer"
                    >
                        <FaSquarePhoneFlip className=" text-black" />
                        <span className=" mx-4">
                        +91 9312847473 , +91 9312847473
                        </span>
                    </a>
                    <br />
                    <a
                        href="#"
                        className=" flex items-center justify-start cursor-pointer"
                    >
                        <span className=" mx-4"></span>
                    </a>
                    <br />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};
export default AboutUs;
