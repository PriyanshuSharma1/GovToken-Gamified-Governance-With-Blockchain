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
    events: "",
  },
  {
    events: "",
  },
  {
    events: "",
  },
  {
    events: "",
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
            return <div className="boxes"></div>;
          })}
        </div>
      </div>
    </div>
  );
}
