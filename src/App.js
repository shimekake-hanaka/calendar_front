import logo from './logo.svg';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja'; // 追加
import './App.css';


const name = '太郎';
const age = '10';

function App() {
  return (
    <div className="App">
      <h1>
        hollo world
      </h1>
      <p class="name">僕の名前は{name}です。{age}歳です。</p>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}         // 追加
        locale='ja'                  // 追加
      />
    </div>
  );
}
export default App;