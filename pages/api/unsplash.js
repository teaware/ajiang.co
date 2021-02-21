import { createApi } from 'unsplash-js';

export default async (_, res) => {
  const unsplash = createApi({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

  const response = await unsplash.users.getLikes({
    username: 'teaware',
    page: 1,
    perPage: 10,
    orderBy: 'latest'
  });

  const likes = response.response.results;

  // const { likes } = await toJson(userLikes);

  const imgs = likes.map((like) => ({
    id: like.id,
    alt: like.alt_description,
    width: like.width,
    height: like.height,
    full: like.urls.full,
    regular: like.urls.regular,
    small: like.urls.small,
    thumb: like.urls.thumb,
    color: like.color
  }));

  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=1200, stale-while-revalidate=600'
  // );

  return res.status(200).json({ imgs });
};
