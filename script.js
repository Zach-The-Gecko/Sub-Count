const subcount = document.getElementById("number");

const channelId = "UCLPxXrK_Wkmlq301zOUJ-2g";

//gamerboy 80 UCuAj31T2G04FZkCR-6carEA

const timer = () => {
  setTimeout(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" +
        channelId +
        "&key=AIzaSyD8Xb8SL4FLbnLAnzpNb4Z-LXAkAonLzGE"
    )
      .then((json) => json.json())
      .then((res) => {
        subcount.innerHTML = res.items[0].statistics.subscriberCount;
      })
      .catch(() => (subcount.innerHTML = "undefined"));
    timer();
  }, 8000);
};

timer();
