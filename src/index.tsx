import ReactDOM from 'react-dom/client';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return(
    <div>
      <GuestList  />
      <UserSearch  />
    </div>
  );
};

root.render(
    <App />
);
