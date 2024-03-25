"use client";
import { useConnect, useConnectors } from "wagmi";
import { Button } from "./ui/button";

export function ConnectWalletButton() {
  const connectors = useConnectors();
  const { connect } = useConnect();

  const handleConnect = async () => {
    // Find the WalletConnect connector
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const walletConnectConnector = connectors.find(
      (connector) => connector.id === "walletConnect",
    );
    if (walletConnectConnector) {
      await connect({ connector: walletConnectConnector });
    }
  };

  return (
    <div>
      <Button onClick={handleConnect} disabled={false}>
        Connect Wallet
      </Button>
      {/* {error && <p style={{ color: 'red' }}>{error.message}</p>} */}
    </div>
  );
}
