import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import A_ImageNews from './A_ImageNews'
import M_CardOrg from './M_CardOrg'
import M_TypekitGroupNewsData from './M_TypekitGroupNewsData'
import M_TypekitGroupNewsText from './M_TypekitGroupNewsText'
import M_NavigationShare from './M_NavigationShare'

const DIV = styled.div`
  box-sizing: border-box;
  width: 1093px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  }
`;

const CARD = styled.div`
  display: flex;
  gap: 40px;
  }
`;

const ORG = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
`;

class O_NewsItem extends React.Component {
  render () {
    return (
      <DIV>
        <CARD>
        <A_ImageNews></A_ImageNews>
        <ORG>
        <M_CardOrg></M_CardOrg>
        <M_TypekitGroupNewsData></M_TypekitGroupNewsData>
        </ORG>
        </CARD>
        <M_TypekitGroupNewsText title="Продлен прием заявок на конкурс «Доброволец Москвы — 2020»!" text="Теперь зарегистрироваться можно до 18 октября (включительно). Еще больше неравнодушных горожан смогут поучаствовать в главном добровольческом событии года в столице, а также стать частью команды #ВолонтерыМосквы."></M_TypekitGroupNewsText>
        <M_NavigationShare></M_NavigationShare>
      </DIV>
    );
  }
}

export default O_NewsItem
