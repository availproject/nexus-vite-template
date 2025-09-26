import ConnectWallet from "./components/blocks/connect-wallet";

function App() {
  return (
    <div className="flex items-center justify-center flex-col gap-y-4 h-full w-full max-w-3xl mx-auto">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #14b8a6 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
      <h1 className="text-3xl font-semibold z-10">Avail Nexus Vite template</h1>
      <h2 className="text-lg font-semibold z-10">
        Do you first transaction in seconds
      </h2>
      <div className="flex gap-x-4 items-center justify-center ">
        <ConnectWallet />
      </div>
    </div>
  );
}

export default App;
