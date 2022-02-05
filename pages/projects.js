import Container from '@/components/Container';
import Image from 'next/image';

export default function Projects() {
  return (
    <Container title="Projects – 阿江" description="个人项目">
      <div className="flex flex-col justify-center items-start max-w-2xl px-5 pt-safe-top mx-auto my-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4 md:mt-8">
          Projects
        </h1>
        <p>部分开源项目</p>
        <div className="md:mt-4">
          <div>
            <div className="md:flex md:-mx-4">
              <div className="mt-12 md:w-1/2 md:mx-4">
                <a
                  href="https://photos.ajiang.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/projects/photos.png"
                    width={1280}
                    height={800}
                    className="rounded-md"
                  />
                </a>
              </div>
              <div className="mt-12 md:w-1/2 md:mx-4">
                <a
                  href="https://pokedex.ajiang.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/projects/pokedex.png"
                    width={1280}
                    height={800}
                    className="rounded-md"
                  />
                </a>
              </div>
            </div>
            <div className="md:flex md:-mx-4">
              <div className="mt-12 md:w-1/2 md:mx-4">
                <a
                  href="https://3d.ajiang.co/fox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/projects/3d.png"
                    width={1280}
                    height={800}
                    className="rounded-md"
                  />
                </a>
              </div>
              <div className="mt-12 md:w-1/2 md:mx-4">
                <a
                  href="https://starter-point.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/projects/blog_starter.png"
                    width={1280}
                    height={800}
                    className="rounded-md"
                  />
                </a>
              </div>
            </div>

            <div className="mt-16 mb-32 md:mt-24">
              <p className="text-2xl font-semibold md:text-2xl">
                Previous work
              </p>

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
                {/* <div className="w-full px-2 md:w-1/3">
                  <PastProjectCard href="https://3d.ajiang.co/tie-fighter">
                    Tie Fighter
                  </PastProjectCard>
                </div> */}
              </div>
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
