export default function NetworkStatus() {
  const tps = 400;

  if (tps < 500) {
    return (
      <div
        style={{
          width: "100%",
          background: "#dda600",
          textAlign: "center",
          color: "white",
          padding: "8px 12px",
          fontSize: "12px",
        }}
      >
        The Solana network is unusually slow
      </div>
    );
  }

  return null;
}
