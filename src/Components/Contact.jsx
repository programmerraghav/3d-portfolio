import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import EarthCanvas from "./canvas/Earth";

// template_husjho8
// service_b6oui1l
// Iut6m_3BYv3j9u1F9
const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            'service_b6oui1l',
            'template_husjho8',
            {
                from_name: form.name,
                to_name: "Raghav Goyal",
                from_email: form.email,
                to_email: "goyalraghav853@gmail.com",
                message: form.message
            },
            'Iut6m_3BYv3j9u1F9'
        ).then(() => {
            setLoading(false)
            alert("Thank You. I will get back to you as soon as possible.")

            setForm({
                name: "",
                email: "",
                message: ""
            }, (error) => {
                setLoading(false)
                console.log(error);
                alert("Something went wrong.")
            })
        })
    }
    return (
        <>
            <div id="contact" className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
                <motion.div
                    className="form ml-10 flex-[0.75] p-8 rounded-2xl border-2 border-gray-700 pt-12"
                    initial={{ opacity: 0, y: "-20px", x: '-20px' }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
                >
                    <p className="text-slate-500">Get in touch</p>
                    <h3 className="font-medium text-4xl">Contact.</h3>
                    <form ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-6 flex flex-col gap-8"
                    >
                        <label for="name" className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Name</span>
                            <input type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's Your Name?"
                                className="bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label for="email" className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Email</span>
                            <input type="text"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's Your Email?"
                                className="bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label for="message" className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Message</span>
                            <textarea type="text"
                                name="message"
                                id="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What's do you want to say?"
                                className="bg-gray-800 py-4 px-6 
                                h-44 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <button type="submit" className="button py-2 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl">{loading ? "Sending..." : "Send"}</button>
                    </form>
                </motion.div>
                <motion.div
                    className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                >
                    <EarthCanvas />
                </motion.div>
            </div>
        </>
    )
}

export default Contact;