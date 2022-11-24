export const newsTable = [
  {
    title: "Tremplin Bouillon Up #12",
    date: "November, 24, 2022",
    img: "https://www.univ-orleans.fr/upload/public/styles/univ_wysiwyg_big/public/2019-04/vie_campus_culture_01.jpg?h=a498541c&itok=HQmXhF4i",
    content:`<p>We will perform the first show in a duo band line-up the December, 1st, 2022, at Le Bouillon we are very excited !</p>
    <p>
      We will be in competition with 3 others bands Gaspard Ducroix, Les Batards du Rois and Zepso, good luck to everybody !
    </p>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBouillonOrleans%2Fposts%2Fpfbid02b7BBeXE5vJhCkwoks3DwaBGLom3urzYsAggd3PvtWDqTKqCTo4xdZW6DH3C1hviPl&show_text=true&width=500" width="500" height="748" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> `,
    id:"tremplin_bouillon_annonce"
  }
  
  ];



  export function getNews(id){
    return newsTable.find(
      (news) => news.id === id
    );
  }