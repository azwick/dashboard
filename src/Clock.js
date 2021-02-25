import {useEffect, useState} from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const clockDisplay = date.toLocaleString('de-DE', timeOptions);

  useEffect(() => {
    let timer = setInterval( () => setDate(new Date()), 1000 );

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="clock">
        {clockDisplay}
      </div>
      <div className="date">
        {date.toLocaleString('de-DE', dateOptions)}
      </div>
    </div>
  );
}

export default Clock;