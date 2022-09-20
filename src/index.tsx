import ReactDOM from 'react-dom/client';
import EventComponent from './events/EventComponent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return(
    <div>
      <EventComponent  />
    </div>
  );
};

root.render(
    <App />
);
