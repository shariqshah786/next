import React from 'react';
import { Briefcase, Clock, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface SimilarJobCardProps {
    title: string;
    company: string;
    jobType: string;
    salary: string;
    salaryPeriod: string;
    location: string;
    postedTime: string;
}

export default function SimilarJobCard({
    title,

    jobType,
    salary,
    salaryPeriod,
    location,
    postedTime
}: SimilarJobCardProps) {
    return (
        <div className="group">
            <div className="flex gap-3 p-3 rounded-lg transition-colors hover:bg-muted/50">
                <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                </div>

                <div className="flex-1">
                    <h4 className="font-medium group-hover:text-primary transition-colors">
                        <a href="#">{title}</a>
                    </h4>

                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            {jobType}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {postedTime}
                        </span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                        <div>
                            <span className="font-medium">{salary}</span>
                            <span className="text-xs text-muted-foreground">/{salaryPeriod}</span>
                        </div>
                        <div className="text-xs flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {location}
                        </div>
                    </div>
                </div>
            </div>
            <Separator className="mt-3" />
        </div>
    );
}