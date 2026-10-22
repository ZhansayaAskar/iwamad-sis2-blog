export type Post = {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    tags: string[];
  };
  
  export const posts: Post[] = [
    {
      id: 1,
      title: 'Getting Started with React Router',
      excerpt: 'How to add routing to a React app with react-router.',
      content:
        'React Router lets you split a single-page app into multiple routes. You wrap the app in BrowserRouter, define Routes, and use NavLink for navigation. Each route can render a different page component without reloading the page.',
      date: '2 October 2026',
      tags: ['React', 'TypeScript'],
    },
    {
      id: 2,
      title: 'CSS Variables for Theming',
      excerpt: 'Using CSS custom properties to switch between light and dark mode.',
      content:
        'CSS variables live on :root and can be overridden under any selector. For dark mode, you only need to override the same variables — the rest of the CSS stays the same because it reads from var().',
      date: '28 September 2026',
      tags: ['CSS', 'Design'],
    },
    {
      id: 3,
      title: 'Writing My First React Test',
      excerpt: 'A short intro to Vitest and React Testing Library.',
      content:
        'Vitest runs on Vite and is fast. React Testing Library helps you render components and simulate user interactions. Together they let you test that a component behaves correctly — for example that a button click changes the visible text.',
      date: '20 September 2026',
      tags: ['Testing', 'Vitest'],
    },
    {
      id: 4,
      title: 'Why I Use TypeScript',
      excerpt: 'Type safety catches small mistakes before they reach the browser.',
      content:
        'TypeScript checks your code as you write it. It catches typos in property names, missing props, and wrong types. In React it also helps with component props — you always know what a component expects.',
      date: '15 September 2026',
      tags: ['TypeScript', 'React'],
    },
    {
      id: 5,
      title: 'Building a Blog with React Router',
      excerpt: 'How I structured my SIS 2 project into pages and layouts.',
      content:
        'Splitting a blog into a layout route and page components keeps the header and footer in place. The Outlet component renders whatever route matches the current URL.',
      date: '10 October 2026',
      tags: ['React', 'Router'],
    },
  ];