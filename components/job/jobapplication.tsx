import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"; // Import shadcn Dialog components
import { Button } from "@/components/ui/button"; // Import shadcn Button component
import { Input } from "@/components/ui/input"; // Import shadcn Input component
import { Textarea } from "@/components/ui/textarea"; // Import shadcn Textarea component

interface JobApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const JobApplicationModal = ({ isOpen, onClose }: JobApplicationModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl text-brand-1">
                        Start Your Career Today
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground">
                        Please fill in your information and send it to the employer.
                    </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="post_title" className="block text-sm font-medium text-gray-700">
                            Job title
                        </label>
                        <Input type="text" id="post_title" name="post_title" className="mt-1" />
                    </div>
                    <div>
                        <label htmlFor="applicants_full_name" className="block text-sm font-medium text-gray-700">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                            type="text"
                            id="applicants_full_name"
                            name="applicants_full_name"
                            required
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="applicants_email" className="block text-sm font-medium text-gray-700">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                            type="email"
                            id="applicants_email"
                            name="applicants_email"
                            required
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="applicants_contact" className="block text-sm font-medium text-gray-700">
                            Contact Number <span className="text-red-500">*</span>
                        </label>
                        <Input
                            type="text"
                            id="applicants_contact"
                            name="applicants_contact"
                            required
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="applicants_description" className="block text-sm font-medium text-gray-700">
                            Cover letter
                        </label>
                        <Textarea
                            id="applicants_description"
                            name="applicants_description"
                            rows={3}
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="applicants_resume" className="block text-sm font-medium text-gray-700">
                            Resume <span className="text-red-500">*</span>
                        </label>
                        <Input
                            type="file"
                            id="applicants_resume"
                            name="applicants_resume"
                            required
                            className="mt-1"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                            Upload your resume file. <code>File types: .pdf, .doc, .docx</code> and Max file size: 2mb
                        </p>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="bg-primary text-white">
                            Submit
                        </Button>
                    </DialogFooter>
                </form>
                <div className="text-center text-muted-foreground mt-4">
                    Do you need support?{" "}
                    <a href="#" className="text-brand-2 hover:underline">
                        Contact Us
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default JobApplicationModal;