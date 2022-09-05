export const newsTable = [
    {
      title: "The new Red Light Distortion's website",
      date: "September, 2, 2022",
      img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1SUGYNL-VOt5dcUOZUkr-ShQ9CF5KuHP_U37NqYXw4uMMRGhRS3Gc8c9VvIa3jFyq",
      content:`<p>
      Roman was 15 when the shock happenned.
      </p>
      <p>
      He was already listen to metal since he was 10, but it is with the discover of electro and especially with the videoclip «Wizard» 
      by Martin Garrix that the seed of passion was planted. <br />
      Since that time he never looked back.</p>
      <p>
      Starting to learn how to mix, he gave up the mixing to focus on his heart’s instrument, the guitar. 
      When his fingers touched the neck, he immediately knew what he wanted to be : a musician. 
      </p>
      <p>
      So, he begins to devote his time and his own energy to music, 
      drawing inspiration from accomplished musicians like Dave Mustaine or Joe Duplantier. 
      Since, the more the sands of time was running out, 
      the more his passion and devotion increased. 
      </p> `,
      id:"thenewredlightdistortionswebsite"
    },
    {
      title: "Live from Paris",
      date: "August, 20, 2022",
      img: "https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg",
      content:"This is an incredible live here",
      id:"livefromparis"
    },
    {
      title: "Live from Frankfurt",
      date: "August, 25, 2022",
      img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1SUGYNL-VOt5dcUOZUkr-ShQ9CF5KuHP_U37NqYXw4uMMRGhRS3Gc8c9VvIa3jFyq",
      content:"This is an incredible live here",
      id:"livefromfrankfurt"
    },
    {
      title: "Live from Paris",
      date: "August, 20, 2022",
      img: "https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg",
      content:"This is an incredible live here",
      id:"livefromparis"
    },
    {
      title: "Live from Frankfurt",
      date: "August, 25, 2022",
      img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1SUGYNL-VOt5dcUOZUkr-ShQ9CF5KuHP_U37NqYXw4uMMRGhRS3Gc8c9VvIa3jFyq",
      content:"This is an incredible live here",
      id:"thenewredlightdistortionswebsite"
    },
    {
      title: "Live from Paris",
      date: "August, 20, 2022",
      img: "https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg",
      content:"This is an incredible live here",
      id:"livefromparis"
    },
    {
      title: "Live from Frankfurt",
      date: "August, 25, 2022",
      img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1SUGYNL-VOt5dcUOZUkr-ShQ9CF5KuHP_U37NqYXw4uMMRGhRS3Gc8c9VvIa3jFyq",
      content:"This is an incredible live here",
      id:"thenewredlightdistortionswebsite"
    },
    {
      title: "Live from Paris",
      date: "August, 20, 2022",
      img: "https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg",
      content:"This is an incredible live here",
      id:"livefromparis"
    },
    {
      title: "Live from Frankfurt",
      date: "August, 25, 2022",
      img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1SUGYNL-VOt5dcUOZUkr-ShQ9CF5KuHP_U37NqYXw4uMMRGhRS3Gc8c9VvIa3jFyq",
      content:"This is an incredible live here",
      id:"thenewredlightdistortionswebsite"
    },
    {
      title: "Live from Paris",
      date: "August, 20, 2022",
      img: "https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg",
      content:"This is an incredible live here",
      id:"livefromparis"
    }
  ];



  export function getNews(id){
    return newsTable.find(
      (news) => news.id === id
    );
  }