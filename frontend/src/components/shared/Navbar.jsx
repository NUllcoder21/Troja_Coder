import React from 'react'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'

// Importing icons (make sure you have react-icons installed)
import { FaSignOutAlt, FaUser } from 'react-icons/fa'

// Import Link from react-router-dom
import { Link } from 'react-router-dom'

const Navbar = () => {
    const user = false; // Simulating a logged-in user, set this to false to test login/signup UI
    return (
        <div className="bg-white fixed top-0 left-0 w-full z-10 shadow-lg">
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4'>
                <div>
                    <h1 className='text-2xl font-bold'>Wage<span className='text-[#F83002]'>Wise</span></h1>
                </div>
                <div className='flex items-center gap-5'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                {/* Replacing <link> with <Link> */}
                                <Link to="/signup">
                                    <Button className="bg-[#F83002] text-white px-4 py-2 rounded-md hover:bg-[#e02401] transition-colors duration-300" variant="outline">
                                        Sign Up
                                    </Button>
                                </Link>
                                <Link to="/login">
                                    <Button className="text-gray-500 px-4 py-2 rounded-md hover:text-gray-600 transition-colors duration-300">
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className='flex gap-4 space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>Vaibhav Pandey</h4>
                                            <p className='text-sm text-muted-foreground'>Hi, I am Vaibhav.</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-2">
                                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                                            <Button className="bg-[#F83002] text-white px-4 py-2 rounded-md hover:bg-[#e02401] transition-colors duration-300">
                                                <FaUser className="mr-2" /> View Profile
                                            </Button>
                                        </div>
                                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                                            <FaSignOutAlt className="mr-2" />
                                            <Button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400 transition-colors duration-300">
                                                Logout
                                            </Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
