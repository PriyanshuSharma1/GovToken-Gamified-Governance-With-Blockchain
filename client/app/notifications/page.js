const updateItems = [
  {
    updates:
      " Priyanshu participated in the blood donation program conducted by IT MEET today",
  },
  {
    updates:
      " Priyanshu participated in the blood donation program conducted by IT MEET today",
  },
  {
    updates:
      " Priyanshu participated in the blood donation program conducted by IT MEET today",
  },
];
const upcomingEvents = [
  {
    events: "Green City Clean-Up",
    imgs: "/images/green.jpg",
  },
  {
    events: "Youth Voter Registration Drive",
    imgs: "/images/vote.jpeg",
  },
  {
    events: "Community Health and Wellness Fair",
    imgs: "/images/health.jpeg",
  },
  {
    events: "Homelessness Awareness Week",
    imgs: "/images/homeless.jpeg",
  },
];
export default function notificationsPage() {
  return (
    <div>
      <h1>Feed</h1>
      <div className="container">
        <div className="feed-content">
          {updateItems.map((item) => {
            return (
              <div className="box">
                <p>{item.updates}</p>
                <div className="flex justify-between mr-4">
                  <button className="appreciate-button  hover:bg-orange-300">
                    Appreciate{" "}
                    <span role="img" aria-label="clap">
                      👏
                    </span>
                  </button>
                  <button className="circular-button">
                    <span role="img" aria-label="clap">
                      👏
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="vertical-rectangular-block">
          <h1 style={{ color: "white" }}>UPCOMING EVENTS</h1>
          {upcomingEvents.map((item) => {
            return (
              <div className="container feed-content">
                <div className="boxes justify-center p-9 mr-5 ">
                  {item.events}
                  <img
                    src={item.imgs}
                    style={{ height: 90 + "px", width: 550 + "px" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
