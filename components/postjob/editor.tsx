
interface EditorProps {
    content: string;
    setContent: (content: string) => void;
}

const Editor = ({ content, setContent }: EditorProps) => {
    return (
        <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={6}
            placeholder="Enter content here..."
        />
    );
};

export default Editor;