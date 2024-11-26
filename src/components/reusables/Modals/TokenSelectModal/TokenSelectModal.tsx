import useGlobalContext from "@hooks/useGlobalContext";
import CModal from "@components/reusables/CModal";
import styles from "./index.module.scss";
import { Tooltip } from "react-tooltip";
import { MODAL_IDS } from "@constants/types";
import CInput from "@components/reusables/CInput";
import SVGIcon from "@components/reusables/SVGIcon";
import { ICON_NAMES } from "@constants/config";
import { useEffect, useState } from "react";
import {
  ICategory,
  INetwork,
  IToken,
  ITokenModalParams,
} from "@constants/interfeaces";
import { getContrastColor, toggleArray } from "@utils/helper";
import classNames from "classnames";

const TokenSelectModal = () => {
  const { modals, closeModal } = useGlobalContext();
  const [search, setSearch] = useState("");
  const [tokens, setTokens] = useState<IToken[]>([]);
  const [fTokens, setFTokens] = useState<IToken[]>([]);
  const [networks, setNetworks] = useState<INetwork[]>([]);
  const [categories, setCateogries] = useState<ICategory[]>([]);
  const [selNetworks, setSelNetworks] = useState<string[]>();

  useEffect(() => {
    if (modals[MODAL_IDS.TOKEN_SELECT]?.opened) {
      const param = modals[MODAL_IDS.TOKEN_SELECT]?.params as ITokenModalParams;
      setTokens(param.tokens);
      setNetworks(param.networks);
      setFTokens(param.tokens);
      setCateogries(param.categories);
    }
  }, [modals[MODAL_IDS.TOKEN_SELECT]?.opened]);

  const toggleNetwork = (_network: string) => {
    const newAry = toggleArray(selNetworks, _network);
    setSelNetworks(newAry);
    setFTokens(
      tokens.filter(
        (_token) => !newAry.length || newAry?.includes(_token.network_id)
      )
    );
  };

  const onSearchToken = (_search: string) => {
    setSearch(_search);
    setFTokens(
      tokens
        .filter(
          (_token) =>
            !selNetworks?.length || selNetworks?.includes(_token.network_id)
        )
        .filter(
          (_token) =>
            !search ||
            _token.keyword.toLowerCase().includes(_search.trim().toLowerCase())
        )
    );
  };

  const onSelectToken = (_token: IToken) => {
    setSearch("");
    setSelNetworks([]);
    setFTokens(tokens);
    closeModal(MODAL_IDS.TOKEN_SELECT, {
      tokens,
      categories,
      networks,
      selToken: _token,
    } as ITokenModalParams);
  };

  return (
    <CModal
      isOpen={modals[MODAL_IDS.TOKEN_SELECT]?.opened}
      title="Select Token And Chain"
    >
      <div className={styles.token_select_container}>
        <CInput
          big
          value={search}
          placeholder="Search Token Name"
          prefix={<SVGIcon name={ICON_NAMES.SEARCH} />}
          onChange={onSearchToken}
        />

        <div className={styles.networks_section}>
          {networks.map((_network: INetwork) => (
            <img
              key={_network.id}
              className={classNames({
                [styles.selected]: selNetworks?.includes(_network.id),
              })}
              src={_network.logo}
              alt="Logo 1"
              data-tooltip-id="network-tooltip"
              data-tooltip-content={_network.name}
              data-tooltip-float
              onClick={() => toggleNetwork(_network.id)}
            />
          ))}
        </div>

        {/* <div>{selNetworks?.map((_net) => _net)}</div> */}
        {/* <div>{test}</div> */}

        <div className={styles.tokens_section}>
          <div className={styles.tokens_list}>
            {fTokens.map((_token) => (
              <div
                key={_token.id}
                className={styles.token_item}
                onClick={() => onSelectToken(_token)}
              >
                <div className={styles.token_left}>
                  <img src={_token.logo} key={_token.id} alt={_token.keyword} />
                  <span>{_token.display_name.split(" ")[0]}</span>
                </div>
                <div className={styles.token_right}>
                  <span
                    style={{
                      backgroundColor: _token.color,
                      color: getContrastColor(_token.color),
                      borderRadius: 4,
                      padding: 6,
                    }}
                  >
                    {_token.network_name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Tooltip id="network-tooltip" noArrow />
      </div>
    </CModal>
  );
};

export default TokenSelectModal;
