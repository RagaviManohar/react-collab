import React, { useState, useEffect } from "react";

export const SetInternalExample = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect==="); // this will print only once

    let interval = setInterval(() => {
      /**
       * setInterval here creates a closure, at that time 'value' have the initialState
       *
       * here event the setInterval calls multiple times, but value is always 0.
       * hence it will render once as 1, and will not re-render again
       */

      // uncomment the below line to check the failed version
      // setValue(value + 1)
      // console.log(value) // this will trigger in loop with value as initialState

      /**
       * this 'prevState' will always have a updated previous value
       * even though actual state is not up-to-date here, since closure still holds the initialState
       */
      setValue((prevState) => prevState + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p className="d-flex jusitify-content-center">{value}</p>;
};

export default SetInternalExample;
