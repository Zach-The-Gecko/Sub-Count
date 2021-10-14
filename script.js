const subcount = document.getElementById("subCountNumber");
const likecount = document.getElementById("likeCountNumber");

const subcountcontainer = document.getElementById("subcountcontainer");
const likecountcontainer = document.getElementById("likecountcontainer");

const channelId = "UCLPxXrK_Wkmlq301zOUJ-2g"; // 0rtt
const videoId = window.prompt("Enter the video ID"); // Set video ID value here

const apiKey = "AIzaSyD8Xb8SL4FLbnLAnzpNb4Z-LXAkAonLzGE";

const timer = () => {
  setTimeout(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=" +
        videoId +
        "&key=" +
        apiKey
    )
      .then((json) => json.json())
      .then((res) => {
        likecount.innerHTML = res.items[0].statistics.likeCount;
      })
      .catch(() => (likecount.innerHTML = "0"));

    fetch(
      "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" +
        channelId +
        "&key=" +
        apiKey
    )
      .then((json) => json.json())
      .then((res) => {
        subcount.innerHTML = res.items[0].statistics.subscriberCount;
      })
      .catch(() => (subcount.innerHTML = "0"));
    timer();
  }, 8000);
};

timer();

subcountcontainer.addEventListener("click", () => {
  console.log("click");
  if (subcountcontainer.style.opacity == 0) {
    subcountcontainer.style.opacity = 1;
  } else {
    subcountcontainer.style.opacity = 0;
  }
});

likecountcontainer.addEventListener("click", () => {
  if (likecountcontainer.style.opacity == 0) {
    likecountcontainer.style.opacity = 1;
  } else {
    likecountcontainer.style.opacity = 0;
  }
});
