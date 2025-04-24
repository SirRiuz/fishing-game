import Button from "../Button";

interface AppBarProps {
  path: "leaderboard" | "market";
  navigate: (path: "leaderboard" | "market") => void;
}

export default function AppBar({ navigate, path }: AppBarProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        gap: 15,
        marginTop: 30,
        marginBottom: 30,
      }}
    >
      <Button
        title="Leaderboard"
        onClick={() => navigate("leaderboard")}
        indicator={path === "leaderboard"}
      />
      <Button
        title="Market"
        onClick={() => navigate("market")}
        indicator={path === "market"}
      />
    </div>
  );
}
