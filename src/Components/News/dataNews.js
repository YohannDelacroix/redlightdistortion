export const newsTable = [
  {
    title: "Show report #1 - Le Bouillon",
    date: "December, 05, 2022",
    img: "https://zupimages.net/up/22/49/tfb2.png",
    content:`<p>We are very happy, because we lived some great time here</p>
    <p>
      When we arrived we was very surprised ! What a bautiful stage to play our first duo band show !
    </p>

    <p>
      Here is the Walrus playing a famous song, will you recognize it ? You can see that we are very serious during the balance ... 
    </p>

    

    <p>
      Thirty minutes before playing, the first artist Zepso is putting a feet on stage and you can see that we was very excited !
    </p>

    

    <p>
      Unfortunately, we broke the camera support during the balance and your video was about to fall into another kind of Red Light Distortion, 
      but X and Walrus didn't already given their last word, because they ran to the first closer supermarket and found another camera support,
      then they were able to turn your screen into the Red Light Distortion, enjoy the video !
    </p>


    `,
    id:"show_report_lebouillon01122022"
  },
  {
    title: "New LIVE Video Sir Failure",
    date: "December, 04, 2022",
    img: "https://zupimages.net/up/22/49/tfb2.png",
    content:`
    <p>
      Enjoy our new LIVE video from the last show at Le Bouillon, the song is called "Sir Failure", it talks about the inner conflict that everyone could live one day.
    </p>

    <iframe 
                  class="video-frame"
                  src="https://www.youtube.com/embed/p0Y52_ej810"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen />
    `,
    id:"new_video_sirfailure"
  },
  {
    title: "Tremplin Bouillon Up #12",
    date: "November, 24, 2022",
    img: "https://www.univ-orleans.fr/upload/public/styles/univ_wysiwyg_big/public/2019-04/vie_campus_culture_01.jpg?h=a498541c&itok=HQmXhF4i",
    content:`<p>We will perform the first show in a duo band line-up the December, 1st, 2022, at Le Bouillon we are very excited !</p>
    <p>
      We will be in competition with 3 others bands Gaspard Ducroix, Les Batards du Rois and Zepso, good luck to everybody !
    </p>
    <iframe class="network-publication" 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBouillonOrleans%2Fposts%2Fpfbid02b7BBeXE5vJhCkwoks3DwaBGLom3urzYsAggd3PvtWDqTKqCTo4xdZW6DH3C1hviPl&show_text=true&width=250" 
            width="350" height="748" 
            style="border:none;overflow:hidden" scrolling="yes" 
            frameborder="0" allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
    </iframe> `,
    id:"tremplin_bouillon_annonce"
  }
  
  ];



  export function getNews(id){
    return newsTable.find(
      (news) => news.id === id
    );
  }