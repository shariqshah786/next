import ContactHeader from "@/components/contact/contactHeader";
import ContactFrom from "@/components/contact/contactform";
// import ContactInfo from "@/components/contact/contactInfo";
import TeamSection from "@/components/contact/teamSection";
import Footer from "@/components/footer/footer";
import HiringSection from "@/components/hiring/hiringsection";
import { Navbar } from "@/components/navbar/navbar";

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <div className="bg-white">
                {/* Contact Header Section */}

                <ContactHeader />

                {/* Contact Info Section */}
                {/* <ContactInfo /> */}

                {/* Contact Form Section */}
                <div className="mx-2">
                    <ContactFrom /></div>
                {/* Team Section */}
                <TeamSection />
                <HiringSection />

            </div>
            <Footer />

        </>
    )
}