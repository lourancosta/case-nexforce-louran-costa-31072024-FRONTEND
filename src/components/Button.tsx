import React from "react";

import "../styles/components/button.css";

export default function Button(buttonText: string) {
  return (
    <button className="confirm-button" type="submit">
      buttonText
    </button>
  );
}
