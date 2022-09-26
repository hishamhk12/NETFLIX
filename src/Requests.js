const key = 'd3d534a5f12a1c545e4906ff8e35bd6d';
// 
const requests = {
     requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1 `,
    requsetUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requsetNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestTv: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}
    `
}

export default requests