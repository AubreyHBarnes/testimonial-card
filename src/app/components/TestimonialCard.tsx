import Image from "next/image";

export default function TestimonialCard() {
    return (
        <div className="card-wrapper max-w-[350px] bg-white text-black rounded-xl p-6">
            <div className="user-container flex gap-4">
                <Image
                    className=""
                    src="/profile-thumbnail.png"
                    alt="Next.js logo"
                    width={48}
                    height={48}
                    priority
                />
                <div className="user-contact">
                    <p className="user-name text-lg font-medium">Sarah Dole</p>
                    <p className="user-tag text-gray-600">@saradole</p>
                </div>
            </div>
            <div className="copy-container text-gray-600 pt-6">
                <p>I&apos;ve been searching for high-quality abstract images for my design projects, and 
                    I&apos;m thrilled to have found this platform. The variety and depth of creativity
                    are astounding!
                </p>
            </div>
        </div>
    );
}