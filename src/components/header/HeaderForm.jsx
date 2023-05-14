import { css, styled } from 'styled-components';

const HeaderForm = ({ isscrolltop, isbuttonnclicked, formSelect, headerRefs, selectHandler }) => {
  const {
    formRef,
    placeWrapperRef,
    placeDropdownRef,
    checkInWrapperRef,
    checkInDropdownRef,
    checkOutWrapperRef,
    checkOutDropdownRef,
    calendarDropdownRef,
    guestWrapperRef,
    guestDropdownRef,
  } = headerRefs;

  // TEST CODE
  console.log('HeaderForm rendering');

  return (
    <FormStyle ref={formRef} isbuttonnclicked={isbuttonnclicked}>
      <Wrapper
        ref={placeWrapperRef}
        name="place"
        formSelect={formSelect}
        width="30%"
        onClick={() => selectHandler('place')}
      >
        <PlaceContainer>
          <TextWrapper>
            <TextLabel>여행지</TextLabel>
            <TextDesc>여행지 검색</TextDesc>
          </TextWrapper>
        </PlaceContainer>
      </Wrapper>

      <Wrapper ref={checkInWrapperRef} name="checkIn" formSelect={formSelect} width="20%">
        <TextWrapper>
          <TextLabel>체크인</TextLabel>
          <TextDesc>날짜 추가</TextDesc>
        </TextWrapper>
      </Wrapper>

      <Wrapper ref={checkOutWrapperRef} name="checkOut" formSelect={formSelect} width="20%">
        <TextWrapper>
          <TextLabel>체크아웃</TextLabel>
          <TextDesc>날짜 추가</TextDesc>
        </TextWrapper>
      </Wrapper>

      <Wrapper ref={guestWrapperRef} name="guests" formSelect={formSelect} width="30%">
        <TextWrapper>
          <TextLabel>여행자</TextLabel>
          <TextDesc>게스트 추가</TextDesc>
        </TextWrapper>
      </Wrapper>

      {/* TODO: 검색 아이콘 */}
    </FormStyle>
  );
};

const FormStyle = styled.form`
  position: relative;
  background-color: white;
  width: 100%;
  height: 66px;
  border-radius: 10rem;

  border: 1px solid #dddddd;

  display: ${({ isbuttonnclicked }) => (isbuttonnclicked === 'true' ? 'flex' : 'none')};
`;

const TextWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
`;

const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: 68px;
  display: flex;
  align-items: center;

  margin-top: -2px;
  outline: none;

  &:not(:first-child) ${TextWrapper}::before {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    display: block;
    height: 100%;
    width: 1px;
    background-color: #dddddd;
  }

  ${({ formSelect, name }) =>
    !(formSelect === 'checkIn' && name === 'checkOut') &&
    css`
      &:hover {
        background: rgba(0, 0, 0, 0.07);
        border-radius: 34px;
        margin-top: -1px;
        height: 66px;
        ${TextWrapper}::before {
          display: none;
        }
      }

      &:hover + & {
        ${TextWrapper}::before {
          display: none;
        }
      }
    `}

  &:focus-within {
    background-color: white;
    border-radius: 10rem;
    height: 66px;
    margin-top: -1px;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.3);
    ${TextWrapper}::before {
      display: none;
    }
    button {
      display: inline-flex;
    }
  }

  &:focus-within + & {
    ${TextWrapper}::before {
      display: none;
    }
  }

  ${({ name }) =>
    name === 'place' ||
    css`
      padding-left: 20px;
    `}
`;

const TextLabel = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
`;

const TextDesc = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #717171;
`;

const PlaceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 28px;
`;

export default HeaderForm;
