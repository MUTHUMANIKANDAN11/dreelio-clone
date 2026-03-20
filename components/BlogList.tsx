import { BlogCard } from "./BlogCard"
import { blogs } from "../data/blogs"

export default function BlogList({ excludeId, excludeMainBlog = false }: { excludeId?: string, excludeMainBlog?: boolean }) {
    // Show up to 3 blogs, excluding the current one
    const displayBlogs = blogs.filter(b => 
        b.id !== excludeId && (!excludeMainBlog || b.id !== "1")
    ).slice(0, 3);
    
    return (
        <div className="hero9-footer flex w-[1000px] justify-between items-center mt-7 gap-5">
            {displayBlogs.map(blog => (
                <BlogCard
                    key={blog.id}
                    id={blog.id}
                    imageSrc={blog.imageSrc}
                    title={blog.title}
                    tag={blog.tag}
                    tagColor={blog.tagColor}
                />
            ))}
        </div>
    )
}