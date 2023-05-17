import { styled } from 'styled-components';
import { ReactComponent as LineIcon } from '../assets/header-user-button-line.svg';
import { ReactComponent as UserIcon } from '../assets/header-user-button-icon.svg';
import { useState, useRef, useEffect } from 'react';
import Dropdown from '../global/Dropdown';
import UserNavDropdown from './dropdown/UserNavDropdown';
import TestDropdown from './TestDropdown';

const HeaderUserNav = ({
  isUserDropdownOpen,
  setIsUserDropdownOpen,
  testDropdownOpen,
  setTestDropdownOpen,
  isModalOpen,
  setIsModalOpen,
}) => {
  // const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = event => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsUserDropdownOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [dropdownRef]);

  // TESTCODE
  // const [testDropdownOpen, setTestDropdownOpen] = useState(false);

  return (
    <>
      <Container>
        <Button>당신의 공간을 에어비앤비하세요</Button>

        <UserContainer ref={dropdownRef} onClick={() => setIsUserDropdownOpen(true)}>
          <LineIcon />
          <UserIcon />
        </UserContainer>

        {isUserDropdownOpen && (
          <>
            <UserDropdownWrapper dropdownState="user">
              <UserNavDropdown
                setIsUserDropdownOpen={setIsUserDropdownOpen}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </UserDropdownWrapper>
          </>
        )}

        {/* <button
          onClick={() => {
            setTestDropdownOpen(true);
          }}
        >
          TEST
        </button>

        {testDropdownOpen && (
          <TestDropdown
            setTestDropdownOpen={setTestDropdownOpen}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )} */}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 0.7rem;
`;

const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  color: #222222;
  height: 42px;
`;

const UserContainer = styled.button`
  width: 77px;
  height: 42px;
  border: 1px solid #dddddd;
  border-radius: 40px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const UserDropdownWrapper = styled(Dropdown)`
  top: 68px;
  right: 70px;
  padding: 0;
  border-radius: 10px;
  font-size: 14px;
`;

export default HeaderUserNav;
