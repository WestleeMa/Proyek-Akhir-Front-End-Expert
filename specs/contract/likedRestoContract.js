const itActsAsLikedRestaurantModel = (likedResto) => {
  it('should return the resto that has been added', async () => {
    likedResto.putRestaurant({
      id: 1,
    });
    likedResto.putRestaurant({
      id: 2,
    });

    expect(await likedResto.getRestaurant(1))
      .toEqual({
        id: 1,
      });
    expect(await likedResto.getRestaurant(2))
      .toEqual({
        id: 2,
      });
    expect(await likedResto.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a resto from being added if it does not have the correct property', async () => {
    likedResto.putRestaurant({
      aProperty: 'property',
    });

    expect(await likedResto.getAllRestaurant())
      .toEqual([]);
  });

  it('can return all of the restos that have been added', async () => {
    likedResto.putRestaurant({
      id: 1,
    });
    likedResto.putRestaurant({
      id: 2,
    });

    expect(await likedResto.getAllRestaurant())
      .toEqual([{
        id: 1,
      },
      {
        id: 2,
      },
      ]);
  });

  it('should remove liked resto', async () => {
    likedResto.putRestaurant({
      id: 1,
    });
    likedResto.putRestaurant({
      id: 2,
    });
    likedResto.putRestaurant({
      id: 3,
    });

    await likedResto.deleteLikedResto(1);

    expect(await likedResto.getAllRestaurant())
      .toEqual([{
        id: 2,
      },
      {
        id: 3,
      },
      ]);
  });

  it('should handle request to remove a resto even though the resto has not been added', async () => {
    likedResto.putRestaurant({
      id: 1,
    });
    likedResto.putRestaurant({
      id: 2,
    });
    likedResto.putRestaurant({
      id: 3,
    });

    await likedResto.deleteLikedResto(4);

    expect(await likedResto.getAllRestaurant())
      .toEqual([{
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      ]);
  });
};

export default itActsAsLikedRestaurantModel;
