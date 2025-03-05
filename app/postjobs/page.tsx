"use client"
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Editor from '@/components/postjob/editor' // Adjust the import path as needed
import Loader from '@/components/postjob/loader' // Adjust the import path as needed
import Link from 'next/link';
import { Navbar } from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
interface ICategory {
    _id: string
    name: string
}

const CreateJobPage = () => {
    const [skills, setSkills] = useState<string[]>([])
    const [description, setDescription] = useState('')
    const [requirement, setRequirement] = useState('')
    const [position, setPosition] = useState('')
    const [jobLevel, setJobLevel] = useState('')
    const [employmentType, setEmploymentType] = useState('')
    const [salary, setSalary] = useState(0)
    const [keywords, setKeywords] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState('')
    const [categoryData, setCategoryData] = useState<ICategory[]>([])

    const handleChangeSkills = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.key === ',' && (e.target as HTMLInputElement).value !== ',') {
            const val = (e.target as HTMLInputElement).value
            if (skills.includes(val.substring(0, val.length - 1)))
                (e.target as HTMLInputElement).value = ''
            else {
                setSkills([...skills, val.substring(0, val.length - 1)])
                    ; (e.target as HTMLInputElement).value = ''
            }
        }
    }

    const handleChangeKeywords = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ',' && (e.target as HTMLInputElement).value !== ',') {
            const val = (e.target as HTMLInputElement).value
            if (keywords.includes(val.substring(0, val.length - 1)))
                (e.target as HTMLInputElement).value = ''
            else {
                setKeywords([...keywords, val.substring(0, val.length - 1)])
                    ; (e.target as HTMLInputElement).value = ''
            }
        }
    }

    const handleRemoveSkill = (idx: number) => {
        const skillCopy = [...skills]
        skillCopy.splice(idx, 1)
        setSkills(skillCopy)
    }

    const handleRemoveKeyword = (idx: number) => {
        const keywordCopy = [...keywords]
        keywordCopy.splice(idx, 1)
        setKeywords(keywordCopy)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!position) {
            alert('Please provide job position.')
            return
        }

        if (!jobLevel) {
            alert('Please provide job level.')
            return
        }

        if (!employmentType) {
            alert('Please provide employment type.')
            return
        }

        if (skills.length < 1) {
            alert('Please provide at least 1 skill.')
            return
        }

        if (salary < 10000) {
            alert('Salary should be at least IDR 10.000')
            return
        }

        if (!description) {
            alert('Please provide job overview.')
            return
        }

        if (description.length < 100) {
            alert('Job overview should be at least 100 characters.')
            return
        }

        if (!requirement) {
            alert('Please provide job requirement.')
            return
        }

        if (keywords.length < 1) {
            alert('Please provide at least 1 keyword.')
            return
        }

        setLoading(true)

        const jobData = {
            id: Date.now().toString(), // Generate a unique ID
            position,
            jobLevel,
            category,
            employmentType,
            skills,
            keywords,
            salary,
            requirements: requirement,
            overview: description,
        }

        console.log('Job Data:', jobData)
        const savedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
        savedJobs.push(jobData);
        localStorage.setItem('jobs', JSON.stringify(savedJobs));

        setLoading(false);
        alert('Job created successfully!');
        window.location.href = '/managejobs'; // Redirect to manage jobs page
    };

    // Simulate fetching categories (you can replace this with static data)
    useEffect(() => {
        const categories: ICategory[] = [
            { _id: '1', name: 'Software Development' },
            { _id: '2', name: 'Data Science' },
            { _id: '3', name: 'Product Management' },
        ];
        setCategoryData(categories);
    }, []);

    return (
        <>
            <Navbar />


            <div className="container max-w-6xl items-center mx-auto p-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Create Job</h1>
                    <Link href="/manage-jobs">
                        <div className="text-blue-500 hover:underline">Manage Jobs</div>
                    </Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="position" className="block text-sm font-medium mb-2">
                            Position
                        </label>
                        <input
                            type="text"
                            id="position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="category" className="block text-sm font-medium mb-2">
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">- Category -</option>
                            {categoryData.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="jobLevel" className="block text-sm font-medium mb-2">
                            Job Level
                        </label>
                        <select
                            id="jobLevel"
                            value={jobLevel}
                            onChange={(e) => setJobLevel(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">- Job Level -</option>
                            <option value="internship">Internship</option>
                            <option value="entryLevel">Entry Level / Junior</option>
                            <option value="associate">Associate / Supervisor</option>
                            <option value="manager">Mid-Senior Level / Manager</option>
                            <option value="director">Director / Executive</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="employmentType" className="block text-sm font-medium mb-2">
                            Employment Type
                        </label>
                        <select
                            id="employmentType"
                            value={employmentType}
                            onChange={(e) => setEmploymentType(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">- Employment Type -</option>
                            <option value="fullTime">Full Time</option>
                            <option value="partTime">Part Time</option>
                            <option value="freelance">Freelance</option>
                            <option value="contractual">Contractual</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="skills" className="block text-sm font-medium mb-2">
                            Skills Required (Separate with comma (,))
                        </label>
                        <div className="border border-gray-300 rounded-md p-2">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {skills.map((skill, idx) => (
                                    <div key={idx} className="flex items-center bg-gray-100 px-2 py-1 rounded-md">
                                        <span className="text-sm">{skill}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveSkill(idx)}
                                            className="ml-2 text-gray-600 hover:text-gray-800"
                                        >
                                            <AiOutlineClose className="text-xs" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <input
                                type="text"
                                onKeyUp={handleChangeSkills}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="salary" className="block text-sm font-medium mb-2">
                            Salary
                        </label>
                        <input
                            type="number"
                            id="salary"
                            value={salary}
                            onChange={(e) => setSalary(parseInt(e.target.value))}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            min={1}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-sm font-medium mb-2">
                            Job Overview
                        </label>
                        <Editor content={description} setContent={setDescription} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="requirement" className="block text-sm font-medium mb-2">
                            Requirements
                        </label>
                        <Editor content={requirement} setContent={setRequirement} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="keywords" className="block text-sm font-medium mb-2">
                            Keywords (Separate with comma (,))
                        </label>
                        <div className="border border-gray-300 rounded-md p-2">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {keywords.map((keyword, idx) => (
                                    <div key={idx} className="flex items-center bg-gray-100 px-2 py-1 rounded-md">
                                        <span className="text-sm">{keyword}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveKeyword(idx)}
                                            className="ml-2 text-gray-600 hover:text-gray-800"
                                        >
                                            <AiOutlineClose className="text-xs" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <input
                                type="text"
                                onKeyUp={handleChangeKeywords}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`w-full p-2 rounded-md text-white ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
                            }`}
                        disabled={loading}
                    >
                        {loading ? <Loader /> : 'Post Job'}
                    </button>
                </form>
            </div>
            <Footer />

        </>
    )
}


export default CreateJobPage