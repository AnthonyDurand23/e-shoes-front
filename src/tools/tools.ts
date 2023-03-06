export const getSizesByGender = (gender: string) => {
  const genderSizes = {
    femme: [35, 49.5],
    homme: [35, 49.5],
    enfant: [15, 37],
  };

  if (gender === 'mixte') gender = 'homme';

  return Array.from(
    {
      length:
        (genderSizes[gender as keyof typeof genderSizes][1] - genderSizes[gender as keyof typeof genderSizes][0]) /
          0.5 +
        1,
    },
    (_, index) => genderSizes[gender as keyof typeof genderSizes][0] + index * 0.5
  ).map((item, index) => {
    return {
      id: index + 1,
      value: item.toString(),
      unavailable: false,
    };
  });
};
