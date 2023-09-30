import {Routes, Route, useNavigate} from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/contacts');
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  return (
    <div>
      <div>
        <button onClick={navigateHome}>Home</button>
        <hr />
        <button onClick={navigateToContacts}>Contacts</button>

        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Contacts() {
  return <h2>Contacts</h2>;
}

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
const navigateCategories = () => {
  navigate("/categories");
};
export default function Home() {
  return (
    <div className="container">
      <div>
        <div className="box1">
          <button className="simple-button">September Goals</button>
          <div className="box2"></div>
        </div>
        <button className="text-3xl m-6" onClick={navigateCategories}>
          What Next?
        </button>
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
