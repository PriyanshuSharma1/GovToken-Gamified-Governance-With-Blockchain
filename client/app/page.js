const upcomingEvents = [
  {
    events: "Green City Clean-Up",
    date: "October 15, 2023",
    imgs: "/images/green.jpg",
  },
  {
    events: "Youth Voter Registration Drive",
    date: "November 5,, 2023",
    imgs: "/images/vote.jpeg",
  },
  {
    events: "Community Health and Wellness Fair",
    date: "November 20, 2023",
    imgs: "/images/health.jpeg",
  },
  {
    events: "Homelessness Awareness Week",
    date: "January 25, 2024",
    imgs: "/images/homeless.jpeg",
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
        <a className="text-3xl m-6" href={"/categories"}>
          What Next?
        </a>
        <div className="container object-cover">
          <button className="content1 hover:bg-gray-100 rounded-lg">
            {" "}
            <img src="/images/8.jpeg" className="button-image object-fit" />
            Voting
          </button>
          <button className="content1  hover:bg-gray-100 rounded-lg">
            <img src="/images/2.jpeg" className="button-imageobject-fit " />
            Blood Donation
          </button>
          <button className="content1  hover:bg-gray-100 rounded-lg ">
            <img src="/images/3.jpeg" className="button-imageobject-fit " />
            Cleaning Campaign
          </button>
        </div>
        <div className="container justify-center">
          <a
            className="content1 p-10 hover:bg-gray-100 rounded-lg "
            href={"/tax"}
          >
            {" "}
            <img src="/images/4.png" className="button-imageobject-fit " />
            Tax Payment
          </a>
          <button className="content1 justify-center  hover:bg-gray-100 rounded-lg">
            <img src="/images/6.jpg" className="button-imageobject-fit " />
            Serving Elderies
          </button>
          <button className="content1 justify-center hover:bg-gray-100 rounded-lg">
            <img src="/images/5.jpg" className="button-imageobject-fit " />
            Donation
          </button>
        </div>
      </div>
      <div className="vertical-rectangular-block">
        <h1 style={{ color: "white" }}>UPCOMING EVENTS</h1>
        {upcomingEvents.map((item) => {
          return (
            <div className="container feed-content">
              <div className="boxes justify-center p-9 mr-5 ">
                {item.events}
                <img
                  className="objetct-cover"
                  src={item.imgs}
                  style={{ height: 90 + "px", width: 550 + "px" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
