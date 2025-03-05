import Image from "next/image";

export default function TeamSection() {
    const teamMembers = [
        {
            name: "Arlene McCoy",
            role: "Frontend Developer",
            image: "/imgs/img3.png",
            location: "New York, US",
        },
        {
            name: "Arlene McCoy",
            role: "Frontend Developer",
            image: "/imgs/img3.png",
            location: "New York, US",
        },
        {
            name: "Arlene McCoy",
            role: "Frontend Developer",
            image: "/imgs/img3.png",
            location: "New York, US",
        },
        {
            name: "Arlene McCoy",
            role: "Frontend Developer",
            image: "/imgs/img3.png",
            location: "New York, US",
        },
        {
            name: "Arlene McCoy",
            role: "Frontend Developer",
            image: "/imgs/img3.png",
            location: "New York, US",
        },
        {
            name: "Arlene McCoy",
            role: "Frontend Developer",
            image: "/imgs/img3.png",
            location: "New York, US",
        },
        {
            name: "Arlene McCoy",
            role: "Frontend Developer",
            image: "/imgs/img3.png",
            location: "New York, US",

        }, {
            name: "Arlene McCoy",
            role: "Frontend Developer",
            image: "/imgs/img3.png",
            location: "New York, US",
        },

        // Add more team members here
    ];

    return (

        <section className=" ">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={24}
                                height={24}
                                className="w-24 h-24 mx-auto mb-4"
                            />
                            <h5 className="font-bold">{member.name}</h5>
                            <p className="text-sm text-gray-600">{member.role}</p>
                            <p className="text-sm text-gray-600">{member.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}