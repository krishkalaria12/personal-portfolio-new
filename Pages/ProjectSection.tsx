import React from 'react'
import { LampDemo } from './LampSection'
import {ThreeDCardDemo} from "@/components/ProjectCard"

function ProjectSection() {
    const courseData = [
        {
            id: 1,
            title: "Codeswear - Next.js E-Commerce Store",
            description: "Welcome to Codeswear, your go-to destination for modern and stylish apparel! This Next.js-based e-commerce website is designed to provide a seamless shopping experience, offering cutting-edge features for both developers and business owners. Whether you're here to learn or contribute, or you're a business owner seeking a robust e-commerce solution, Codeswear has you covered.",
            image: "/CodesWear.png",
            link: "https://codeswearhub.vercel.app/",
            github: "https://github.com/krishkalaria12/codeswear-modern-ecommerce",
        },
        {
            id: 2,
            title: "React Blog App",
            description: "This full-stack React blog app delivers a secure and user-friendly experience. Users can sign up, sign in, and log out securely, manage their profiles, and create, edit, or delete blog posts. A unique feature allows posts to be marked as active or inactive, giving users control over content visibility. The app showcases all posts, regardless of status, and is designed to be responsive across various devices, ensuring a seamless experience.",
            image: "/ReactBlog.png",
            link: "https://appwritereactblog.vercel.app/",
            github: "https://github.com/krishkalaria12/React-Mega-Blog",
        },
        {
            id: 3,
            title: "Shopeasy - E-commerce for the Gen-Z",
            description: "Introducing ShopEasy, a sleek e-commerce website crafted with React, React Router, Redux, and Tailwind CSS. This platform offers a smooth shopping journey, enabling users to explore a diverse product range, add items to their cart, and securely finalize transactions. ShopEasy is powered by React for its user interface, utilizes Appwrite for real-time database functionalities, boasts a modern appearance with Tailwind CSS, ensures secure authentication through Auth0, includes an Admin Panel, and integrates the Fakestore API for product data.It provides an ensuring a seamless experience.",
            image: "/ShopEasy.png",
            link: "https://shopeasyy.netlify.app/",
            github: "https://github.com/krishkalaria12/Shopeasy-Ecommerce-React",
        },
        {
            id: 4,
            title: "Next Auth v5 - Advanced Guide",
            description: "This Next Auth v5 Advanced Guide (2024) showcases key features such as Next-auth v5, Next.js 14 with server actions, and various functionalities like Credentials and OAuth Providers, social logins, forgot password, email verification, two-factor authentication, and user roles. The components cover login, register, forgot password, verification, and error scenarios, with additional features like login/logout buttons, role gates, and middleware exploration. It provides hooks like useCurrentUser and useRole, utilities for currentUser and currentRole, and examples with both server and client components",
            image: "/293493179-d0175397-8c3f-4e82-91c4-78c14f29bb81.png",
            link: "https://next-auth-krish.vercel.app/",
            github: "https://github.com/krishkalaria12/next-auth-v5-advanced-guide",
        },
    ]
    return (
        <div className=''>
            <LampDemo />
            <ThreeDCardDemo className={"mt-[-12rem]"} courseData={courseData} />
        </div>
    )
}

export default ProjectSection