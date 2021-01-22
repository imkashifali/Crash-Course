import React, { useState } from "react";

const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <div>
      <form>
        <div>
          <label>Add Task</label>
          <input
            type="text"
            placeholder="Add Task here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label> Day Time</label>
          <input
            type="text"
            placeholder="Add Day Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div>
          <label>checkedbox</label>
          <input
            type="checkbox"
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default AddTask;
