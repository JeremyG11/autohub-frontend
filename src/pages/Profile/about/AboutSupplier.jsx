import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';

const About = ({ user, currentColor }) => {
    const { firstName, lastName, email, phone, address } = user

    return (
        <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span style={{ color: currentColor }}>
                    <AiOutlineUser className="h-5" />
                </span>
                <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">First Name</div>
                        <div className="px-4 py-2">{firstName} </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Last Name</div>
                        <div className="px-4 py-2">{lastName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Gender</div>
                        <div className="px-4 py-2">Male</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                        <div className="px-4 py-2">{phone}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Current Address</div>
                        <div className="px-4 py-2">{address}</div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email</div>
                        <div className="px-4 py-2">
                            <a className="text-blue-800" href={`mailto:${email}`}>{email}</a>
                        </div>
                    </div>
                    {user.birthDay ?
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Birthday</div>
                            <div className="px-4 py-2">{user.birthDay}</div>
                        </div>
                        : ""
                    }
                </div>
            </div>

        </div>

    )
}

export default About