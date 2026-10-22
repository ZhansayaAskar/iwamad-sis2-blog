export type Post = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  image: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: 'Life as an IT Management Student at KBTU',
    excerpt: 'The real truth about balancing assignments, exams, and finding time to sleep.',
    content: 'Studying at KBTU is definitely not easy, but it is an amazing experience. Being an IT Management student means juggling between technical subjects like programming and management courses. Some days are incredibly stressful with tight deadlines, but looking back at how much I have learned in just a few years makes it all worth it. The campus vibe, meeting friends between classes, and surviving those long lab sessions — this is what university life is really about.',
    date: '21 October 2026',
    tags: ['KBTU', 'Student Life'],
    image: '/life1.jpg',
  },
  {
    id: 2,
    title: 'The View from KBTU That Keeps Me Going',
    excerpt: 'Sometimes you just need to look out the window during a hard lecture to feel better.',
    content: 'Whenever I feel overwhelmed with assignments or stressed before an exam, I go to the upper floors and look out the window. The view of the city and the mountains in the distance is breathtaking. It reminds me why I am here and that there is a whole world outside of university stress. If you ever feel like giving up, just take a 5-minute break, look at the sky, and breathe. It really does give you motivation to keep living and studying.',
    date: '15 October 2026',
    tags: ['Motivation', 'Mindset'],
    image: '/life2.jpg',
  },
  {
    id: 3,
    title: 'Bowling Night with My Classmates',
    excerpt: 'How a spontaneous trip to the bowling alley helped us survive midterms.',
    content: 'Last week, after a really tough midterm exam, my classmates and I decided we needed to celebrate. We went to a bowling alley in the city. None of us are professional players — honestly, we were terrible! But we laughed so much. We ordered pizza, took silly photos, and completely forgot about our GPA for a few hours. It reminded me that university is not just about grades; it is about the friendships you build and the memories you make together.',
    date: '10 October 2026',
    tags: ['Friends', 'Fun'],
    image: '/life3.jpg',
  },
  {
    id: 4,
    title: 'Buying My First Car: Hyundai Mufasa',
    excerpt: 'The excitement of finally getting my own wheels and the freedom it brings.',
    content: 'I recently bought a new car — the Hyundai Mufasa, and I am absolutely in love with it. It has completely changed my daily routine. No more waiting in the cold for buses or being late to university! Driving around the city with my favorite music playing is my new favorite therapy. It was a big step for me, and it taught me responsibility, but every time I press the start button, I get a huge smile on my face.',
    date: '29 September 2026',
    tags: ['Lifestyle', 'Cars'],
    image: '/life4.jpg',
  },
  {
    id: 5,
    title: 'Summer Trip to Kurti with My Friends',
    excerpt: 'Disconnecting from the internet and hiking in the beautiful mountains.',
    content: 'This summer was unforgettable because I went on a hike to Kurti with my best friends. We packed our backpacks, took a bus out of the city, and spent the whole day in nature. The air was so clean, and the views of the river and the mountains were stunning. We grilled food, sat around a campfire in the evening, and just talked. No phones, no laptops, no deadlines. If you ever get the chance to escape to the mountains with your friends, do it. It is the best way to recharge.',
    date: '10 May 2026',
    tags: ['Travel', 'Nature'],
    image: '/life5.jpg',
  },
];