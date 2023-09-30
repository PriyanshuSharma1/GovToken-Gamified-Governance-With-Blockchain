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
export default function Home() {
  return (
    <div className="container">
      <div>
        <div className="box1">
          <button className="simple-button">September Goals</button>
          <div className="box2"></div>
        </div>
        <h1>What Next?</h1>
        <div className="container">
          <button className="content1 hover:bg-orange-400 rounded-lg">
            {" "}
            Tax pic
          </button>
          <button className="content1  hover:bg-orange-400 rounded-lg">
            Blood Donation
          </button>
          <button className="content1  hover:bg-orange-400 rounded-lg ">
            Cleaning Campaign
          </button>
        </div>
        <div className="container">
          <button className="content1  hover:bg-orange-400 rounded-lg ">
            {" "}
            Tax pic
          </button>
          <button className="content1  hover:bg-orange-400 rounded-lg">
            Blood Donation
          </button>
          <button className="content1  hover:bg-orange-400 rounded-lg">
            Cleaning Campaign
          </button>
        </div>
      </div>
      <div className="vertical-rectangular-block">
        <h1 style={{ color: "white" }}>UPCOMING EVENTS</h1>
        {upcomingEvents.map((item) => {
          return <div className="boxes"></div>;
        })}
      </div>
    </div>
  );
}
