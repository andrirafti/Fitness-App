import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { URL, config1 } from "../services";
import axios from "axios";
const Form = ({ val }) => {
  const history = useHistory();
  const [bodyPart, setBodypart] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [completion, setCompleted] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [weight, setWeight] = useState();
  const [goalweight, setGoal] = useState();
  const params = useParams();

  useEffect(() => {
    if (params.id && val.length > 0) {
      const training = val.find((val) => val.id === params.id);
      if (training) {
        setName(training.name);
        setGoal(training.goalweight);
        setWeight(training.weight);
        setDate(training.date);
        setCompleted(training.completion);
        setDifficulty(training.difficulty);
        setDescription(training.description);
        setBodypart(training.bodyPart);
      }
    }
  }, [val, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const NewWorkout = {
      name,
      bodyPart,
      description,
      difficulty,
      completion,
      date,
      goalweight,
      weight,
    };

    await axios.post(URL, { fields: NewWorkout }, config1);

    history.push("/userWorkout");
    window.location.reload();
  };

  return (
    <form id="add" onSubmit={handleSubmit}>
      <div id="add1">
        <div>
          <label>Name:</label>
          <input
            required
            placeholder="Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Current Weight:</label>
          <input
            placeholder="Curr Weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.valueAsNumber)}
          />
        </div>
        <div>
          <label>Goal Weight:</label>
          <input
            placeholder="Goal Weight"
            type="number"
            value={goalweight}
            onChange={(e) => setGoal(e.target.valueAsNumber)}
          />
        </div>

        <div>
          <label> Body-Part:</label>

          <select
            required
            value={bodyPart}
            onChange={(e) => setBodypart(e.target.value)}
          >
            <option>Select An Option</option>
            <option>Chest</option>
            <option>Arms</option>
            <option>Back</option>
            <option>Legs</option>
            <option>Shoulders</option>
          </select>
        </div>

        <div>
          <label> Workout Details:</label>
          <input
            required
            placeholder="Workout Routine"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label> Difficulty-Level:</label>

          <select
            required
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>Select An Option</option>
            <option>Easy</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div>
          <label> Completion:</label>
          <select
            required
            value={completion}
            onChange={(e) => setCompleted(e.target.value)}
          >
            <option>Select An Option</option>
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div>
          <label> Date:</label>

          <input
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Log Workout</button>
      </div>
    </form>
  );
};

export default Form;
