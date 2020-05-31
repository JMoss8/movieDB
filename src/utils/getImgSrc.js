const baseImgUrl = 'http://image.tmdb.org/t/p/w342/'

const getImgSrc = input => {
  const result = input.poster_path ?? input.profile_path ?? false
  return result ? baseImgUrl + result : undefined
}

export default getImgSrc
