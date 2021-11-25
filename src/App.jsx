import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import InchDex from "components/InchDex";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
// eslint-disable-next-line
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <MenuItems />
          <div style={styles.headerRight}>
            <Chains />
            <TokenPrice
              address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
              size="40px"
            />
            <NativeBalance />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          {!isAuthenticated ? (
            <>Please login using the "Authenticate" button</>
          ) : (
            <Switch>
               <Route path="/wallet">
                <Wallet />
              </Route>
              <Route path="/1inch">
                <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                  <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                    <InchDex chain="eth" />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                    <InchDex chain="bsc" />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                    <InchDex chain="polygon" />
                  </Tabs.TabPane>
                </Tabs>
              </Route>
              <Route path="/erc20balance">
                <ERC20Balance />
              </Route>
              <Route path="/onramp">
                <Ramper />
              </Route>
              <Route path="/erc20transfers">
                <ERC20Transfers />
              </Route>
              <Route path="/nftBalance">
                <NFTBalance />
              </Route>
              <Route path="/contract">
                <Contract />
              </Route>
              <Route exact path="/">
                <Redirect to="/quickstart" />
              </Route>
              <Route path="/nonauthenticated">
                <>Please login using the "Authenticate" button</>
              </Route>
            </Switch>
          )}
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
          ⭐️ Please star this{" "}
          <a
            href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            boilerplate
          </a>
          , every star makes us very happy!
        </Text>

        <Text style={{ display: "block" }}>
          🙋 You have questions? Ask them on the {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29"
          >
            Moralis forum
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          📖 Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
          >
            Moralis
          </a>
        </Text>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
         width="80.000000pt" height="60.000000pt" viewBox="0 0 364.000000 159.000000"
         preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,159.000000) scale(0.100000,-0.100000)"
         fill="#000000" stroke="none">
        <path d="M815 1581 c-77 -19 -142 -79 -163 -149 -6 -20 -48 -266 -92 -547 -45
-280 -83 -511 -84 -512 -1 -1 -20 2 -41 8 -116 32 -325 -57 -396 -170 -38 -59
-45 -100 -25 -139 68 -131 388 -52 495 122 14 23 71 273 71 313 0 11 78 87
100 97 18 8 387 12 1356 16 l1331 5 48 30 c27 17 62 49 78 72 28 39 32 59 83
420 29 208 56 393 59 411 l6 32 -1398 -1 c-769 -1 -1411 -4 -1428 -8z m291
-291 c43 -21 79 -63 69 -79 -3 -5 -23 -12 -46 -16 -33 -6 -45 -3 -63 14 -30
28 -91 29 -106 2 -14 -27 7 -46 75 -67 73 -23 110 -62 109 -114 -2 -76 -53
-118 -154 -127 -33 -3 -74 0 -96 7 -40 13 -104 65 -104 86 0 6 24 16 53 22 46
9 54 8 70 -9 39 -41 122 -32 115 13 -2 17 -18 27 -76 46 -58 19 -78 31 -93 56
-38 60 -7 139 66 172 46 20 132 17 181 -6z m464 2 c21 -10 42 -32 53 -55 20
-41 21 -36 -24 -234 l-21 -93 -55 0 c-51 0 -55 2 -50 20 5 20 5 20 -29 0 -71
-44 -185 -34 -214 19 -16 31 -12 83 10 119 31 50 88 72 191 72 71 0 88 3 93
16 24 63 -64 93 -121 42 -17 -16 -29 -19 -62 -13 -23 4 -43 11 -46 15 -14 22
54 83 111 100 50 14 127 11 164 -8z m467 -2 c64 -29 107 -111 66 -124 -49 -14
-93 -18 -93 -7 0 25 -40 51 -79 51 -101 0 -158 -139 -79 -194 36 -26 83 -20
121 14 31 27 39 29 81 24 25 -4 46 -12 46 -18 0 -25 -66 -90 -114 -112 -158
-74 -312 34 -276 193 33 148 195 234 327 173z m473 -2 c54 -28 82 -78 84 -151
l1 -52 -153 -3 c-134 -2 -153 -5 -148 -18 3 -9 6 -20 6 -24 0 -5 10 -18 22
-30 30 -28 89 -27 124 3 24 21 31 22 75 13 27 -5 49 -13 49 -16 0 -12 -64 -72
-94 -87 -17 -9 -57 -18 -91 -20 -117 -9 -194 62 -195 176 0 165 177 281 320
209z m540 7 c16 -8 34 -24 40 -35 11 -20 12 -19 50 12 77 61 192 47 227 -28
16 -34 16 -40 -16 -182 -18 -81 -34 -148 -36 -150 -1 -2 -27 -2 -57 0 l-55 3
28 119 c31 130 28 161 -16 172 -33 8 -82 -13 -103 -43 -8 -14 -27 -75 -42
-136 l-26 -112 -57 -3 c-31 -2 -57 0 -57 3 0 3 11 53 25 111 29 125 30 142 8
166 -24 26 -68 23 -103 -9 -28 -27 -49 -86 -84 -245 -6 -26 -10 -28 -61 -28
-30 0 -55 3 -55 8 0 4 19 91 42 195 l42 187 59 0 c55 0 58 -1 52 -21 l-7 -22
28 20 c16 11 36 23 44 26 30 11 102 7 130 -8z"/>
        <path d="M1370 1067 c-34 -17 -39 -61 -10 -77 47 -25 140 22 140 70 0 18 -6
20 -52 20 -29 0 -64 -6 -78 -13z"/>
        <path d="M2339 1191 c-16 -16 -29 -34 -29 -40 0 -12 172 -16 183 -5 9 10 -20
61 -38 68 -40 15 -87 6 -116 -23z"/>
      </g>
    </svg>

  </div>
);

export default App;
