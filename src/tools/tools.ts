export const getSizesByGenre = (genre: string) => {
  const genreSizes = {
    femme: [35, 49.5],
    homme: [35, 49.5],
    enfant: [15, 37],
  };

  if (genre === 'mixte') genre = 'homme';

  return Array.from(
    {
      length:
        (genreSizes[genre as keyof typeof genreSizes][1] - genreSizes[genre as keyof typeof genreSizes][0]) / 0.5 + 1,
    },
    (_, index) => genreSizes[genre as keyof typeof genreSizes][0] + index * 0.5
  ).map((item, index) => {
    return {
      id: index + 1,
      value: item.toString(),
      unavailable: false,
    };
  });
};
