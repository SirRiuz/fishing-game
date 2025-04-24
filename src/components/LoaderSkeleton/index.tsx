import React from "react";

export default function LoaderSkeleton() {
  return (
    <React.Fragment>
      {[...new Array(3).keys()].map((_, k) => (
        <div
          key={k}
          style={{
            width: "350px",
            height: "350px",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <div
            style={{
              background: "#1E1E1E",
              width: "100%",
              height: "100%",
              borderRadius: "5px",
            }}
          />
        </div>
      ))}
    </React.Fragment>
  );
}
