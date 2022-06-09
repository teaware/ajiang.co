import Container from '@/components/Container';
import { BlurImage } from '@/components/BlurImage';

const images = [
  {
    id: 1,
    href: 'https://photos.ajiang.co/',
    imageSrc: '/img/projects/photos.png',
    name: 'Photos',
    info: 'A Photo Gallery'
  },
  {
    id: 2,
    href: 'https://pokedex.ajiang.co/',
    imageSrc: '/img/projects/pokedex.png',
    name: 'Pokedex',
    info: "Catch'em All"
  },
  {
    id: 3,
    href: 'https://3d.ajiang.co/fox',
    imageSrc: '/img/projects/3d.png',
    name: 'Fox',
    info: 'A 3D Fox'
  },
  {
    id: 4,
    href: 'https://starter-point.vercel.app/',
    imageSrc: '/img/projects/blog_starter.png',
    name: 'Starter Point',
    info: 'A Blog Starter for Gatsby'
  }
];

export default function Projects() {
  return (
    <Container title="Projects – 阿江" description="个人项目">
      <div className="flex flex-col justify-center items-start max-w-2xl px-5 pt-safe-top mx-auto my-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-8 md:mt-8">
          Projects
        </h1>
        <div className="w-full grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
          {images.map((image) => (
            <BlurImage key={image.id} image={image} />
          ))}
        </div>
        <div className="w-full mt-16 mb-32 md:mt-24">
          <p className="text-2xl font-semibold md:text-2xl">Previous work</p>
          <div className="flex flex-wrap mt-4 -mx-2">
            <div className="w-full px-2 md:w-1/3">
              <PastProjectCard href="https://3d.ajiang.co/tie-fighter">
                Tie Fighter
              </PastProjectCard>
            </div>
            <div className="w-full px-2 md:w-1/3">
              <PastProjectCard href="https://3d.ajiang.co/">
                Moon
              </PastProjectCard>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const PastProjectCard = (props) => (
  <a
    className="flex items-center justify-center h-24 px-4 mt-4 font-medium leading-snug text-center text-gray-500 bg-white rounded shadow hover:text-gray-700"
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <p>{props.children}</p>
  </a>
);
