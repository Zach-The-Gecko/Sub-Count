const subcount = document.getElementById("number");

const channelId = "UCuAj31T2G04FZkCR-6carEA";

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
      });
    timer();
  }, 8000);
};

timer();
