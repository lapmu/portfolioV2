import styled from 'styled-components';

import banner from './assets/thankyou.png';
import poto from './assets/poto.jpg';
import gitHub from './assets/gitHub.svg';
import blog from './assets/blog.svg';

function App() {
  return (
    <>
      <Wapper>
        <BannerContainer>
          <img src={banner} />
        </BannerContainer>
        <Title>{'👋안녕하세요! 프론트엔드 개발자 김무성입니다!'}</Title>
        <InfoContainer>
          <MyInfo>
            <img src={poto} />
            <span>email : antjdgkdl@gmail.com</span>
            <div>
              <img src={gitHub} />
              <img src={blog} />
            </div>
          </MyInfo>
          <div>
            <div>
              <div>배운 것을 나누며 성장하는 것을 좋아합니다.</div>
              <div>스터디를 통해</div>
            </div>
          </div>
        </InfoContainer>
      </Wapper>
    </>
  );
}

export default App;

const Wapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const BannerContainer = styled.div`
  height: 415px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #84b5ff;
`;

const Title = styled.div`
  padding: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  > img {
    width: 7vw;
  }
`;
