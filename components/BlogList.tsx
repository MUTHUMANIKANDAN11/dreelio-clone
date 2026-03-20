import { BlogCard } from "./BlogCard"

export default function BlogList() {
    return (
        <div className="hero9-footer flex w-[1000px] justify-between items-center mt-7">
            <BlogCard
                imageSrc="./images/hero9.2.png"
                title="Top 10 degital agency software"
                tag="TOOLS"
                tagColor="#156CC2"
            />

            <BlogCard
                imageSrc="./images/hero9.3.png"
                title="A complete guide to project success in 2026"
                tag="INSIGHT"
                tagColor="#CF8D13"
            />
            <BlogCard
                imageSrc="./images/hero9.4.png"
                title="What Are Billoble Hours"
                tag="MANAGEMENT"
                tagColor="#0EA158"
            />
        </div>
    )
}