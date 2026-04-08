import { getUserById } from "./users";

interface TestimonialRaw {
  userId: string;
  content: string;
}

const testimonialsRaw: TestimonialRaw[] = [
  {
    userId: "user_2",
    content:
      '"We used to miss calls every evening when the front desk got busy. Since we set up Astradial, the voicebot picks up instantly and guests actually get their questions answered. Our staff finally have breathing room."',
  },
  {
    userId: "user_3",
    content:
      '"Honestly I was skeptical — I\'d tried other IVR systems before and they all felt robotic and clunky. Astradial is different. The calls flow naturally and setup took less than a week. Worth every rupee."',
  },
  {
    userId: "user_4",
    content:
      '"The workflow automation alone saved us hours every week. Check-in calls, wake-up calls, checkout reminders — all running on their own now. I don\'t have to think about it anymore."',
  },
  {
    userId: "user_5",
    content:
      '"Our appointment reminder calls used to be done manually by our receptionist. Now Astradial handles 200+ reminder calls a day automatically. No-shows dropped by almost 40% in the first month."',
  },
];

export const testimonials = testimonialsRaw.map((t) => {
  const user = getUserById(t.userId);
  return {
    content: t.content,
    imageSrc: user?.avatar ?? "",
    userName: user?.name ?? "",
    userRole: user?.role ?? "",
  };
});

// Featured testimonial user
const featuredUser = getUserById("user_1");
export const featuredTestimonial = {
  quote: '"AstraDial is by far the best agency tool I have ever used"',
  imageSrc: featuredUser?.avatar ?? "",
  userName: featuredUser?.name ?? "",
  userRole: featuredUser?.role ?? "",
};
