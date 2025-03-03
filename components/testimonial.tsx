import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import SectionSubHeading from "./SectionSubHeading";
import SectionHeading from "./SectionHeading";
import { MessageCircleMore, Star } from "lucide-react";
import { ReviewCardProps } from "@/utils/type";
import { generateStars } from "@/utils/generateStar";


// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
//   {
//     name: "Jane",
//     username: "@jane",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jane",
//   },
//   {
//     name: "Jenny",
//     username: "@jenny",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jenny",
//   },
//   {
//     name: "James",
//     username: "@james",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/james",
//   },
// ];

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  rating
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  rating: number;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name} 
          </figcaption>
            <span className="text-amber-200">{generateStars(rating)}</span>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonial({reviews}: {reviews: ReviewCardProps[]}) {
  return (
    <div className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-8 py-16'>
        <div className='space-y-2 px-4'>
            <SectionSubHeading title={"Testimonials"} icon={MessageCircleMore}/>
            <SectionHeading title={"Here's what my clients say"}/> 
        </div>
        <div className="flex flex-col items-center justify-center py-2">
            <div className="relative h-[300px] max-w-[360px] sm:max-w-[490px] md:max-w-[790px] 
            overflow-hidden rounded-lg border flex items-center
            bg-background md:shadow-md">
                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    {reviews?.map((review, i) => (
                        <ReviewCard 
                          key={i} 
                          img={review.reviewerImage}
                          name={review.reviewerName}
                          username={review.reviewerTitle}
                          body={review.comment}
                          rating={review.rating}
                        />
                      ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </div>
        
    </div>
    
  );
}
