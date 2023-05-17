import { styled } from 'styled-components';

const LoginModal = () => {
  return (
    <StModal>
      <StContainer>
        <Stempty></Stempty>

        <StbodyContainer>
          <Stbodyempty></Stbodyempty>
          <Stbodybody>
            <StsignupHeader>
              <StsignupHeaderName bdColor="#ffffff">로그인</StsignupHeaderName>
            </StsignupHeader>

            <StsignupBody>
              <StsignupIdContainer>
                <StsignupInput bdColor="#f2f2f2" placeholder="이메일"></StsignupInput>
              </StsignupIdContainer>

              <StsignupPwContainer>
                <StsignupInput bdColor="#f2f2f2" placeholder="비밀번호"></StsignupInput>
              </StsignupPwContainer>
            </StsignupBody>

            <StsignupBtnContainer>
              <StsignupButton>로그인</StsignupButton>
            </StsignupBtnContainer>
          </Stbodybody>
          <Stbodyempty1></Stbodyempty1>
        </StbodyContainer>
        <Stempty1></Stempty1>
      </StContainer>
      <div>
        <ModalBtn>취소</ModalBtn>
      </div>
    </StModal>
  );
};

export default LoginModal;

const StDetailContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  box-sizing: border-box;
  margin: 10px 190px 10px 190px;
  flex-direction: row-reverse;
  background-color: white;
`;
const ModalButton = styled.div`
  border: none;
  height: 50px;
  border-radius: 10px;
  width: 300px;
  color: #000000;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  gap: 7px;
  &:active {
    background-color: #c7c7c7;
  }
`;
const StModal = styled.div`
  /* top: 50%;
  left: 50%; */
  width: 500px;
  height: 700px;
  padding: 10px;
  /* position: absolute; */
  /* transform: translate(-50%, -50%); */
  background-color: white;
  border-radius: 12px;
`;
const Background = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0;
  position: fixed;
  opacity: 80%;
  background-color: #ddd;
`;
const ModalBtn = styled.button`
  top: 100px;
  right: 15px;
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 100%;
  cursor: pointer;
  border: 1px solid #ddd;
  :hover {
    border: 1px solid #000000;
  }
`;
const StContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 50px;
`;
const Stempty = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;
const StbodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Stbodyempty = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;
const Stbodybody = styled.div`
  width: 100%;
  height: 100%;
  /* box-shadow: rgba(0, 0, 0, 0.19) 0px 8px 15px, rgba(0, 0, 0, 0.23) 0px 5px 5px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StsignupHeader = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StsignupHeaderName = styled.div`
  width: 100%;
  height: 80%;
  font-size: 30px;
  border: 2px solid ${props => props.bdColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StsignupBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 60px 0px;
`;
const StsignupInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 20px;
  outline: none;
  border: 2px solid ${props => props.bdColor};
  display: flex;
  cursor: pointer;
`;
const StsignupIdContainer = styled.div`
  width: 70%;
  height: 25%;
  border-radius: 12px;
  border: 1px solid ${props => props.bdColor};
  display: flex;
  margin: 30px 0px 30px 0px;
  overflow: hidden;
`;
const StsignupPwContainer = styled.div`
  width: 70%;
  height: 25%;
  border-radius: 12px;
  border: 1px solid ${props => props.bdColor};
  display: flex;
  overflow: hidden;
`;
const StsignupBtnContainer = styled.div`
  width: 70%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const StsignupButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 20px;
  border-radius: 12px;
  font-weight: 800;
  color: #ffffff;
  background: #ee1372;
  border: 2px solid ${props => props.bdColor};
  cursor: pointer;
`;
const Stbodyempty1 = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
`;
const Stempty1 = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;
