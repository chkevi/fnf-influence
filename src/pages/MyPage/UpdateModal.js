import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const UpdateModal = ({ updateOpen, setUpdateOpen, id }) => {
  const [nameValue, setNameValue] = useState('');

  const updateCampaignName = () => {
    fetch(`http://172.2.0.189:8000/campaign/update-message/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzksImlhdCI6MTY1MjMzNDM2MywiZXhwIjoxNjUzNjMwMzYzfQ.9ma55YRXI0PWXJ2PRGFhRb6GF9lxo5ZOuJXfxeV-ki0',
      },
      body: JSON.stringify({
        campaignName: nameValue,
      }),
    })
      .then(res => res.json)
      .then(setUpdateOpen(false));
  };

  const nameHandler = e => {
    setNameValue(e.target.value);
  };

  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={updateOpen}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <InputWrap>
        <CampaignName>캠페인명:</CampaignName>
        <CampaignNameInput onChange={nameHandler} />
      </InputWrap>
      <ButtonWrap>
        <Button onClick={updateCampaignName}>수정</Button>
        <Button onClick={() => setUpdateOpen(false)}>취소</Button>
      </ButtonWrap>
    </Modal>
  );
};

export default UpdateModal;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: '1px solid black',
    transform: 'translate(-50%, -50%)',
  },
};

const InputWrap = styled.div`
  display: flex;
`;

const CampaignName = styled.div`
  ${({ theme }) => theme.flex('center', 'center')}
`;

const CampaignNameInput = styled.input`
  width: 200px;
  height: 30px;
  margin: 5px;
  border: 1px solid black;
`;

const ButtonWrap = styled.div`
  ${({ theme }) => theme.flex('flex-end')};
`;

const Button = styled.button`
  width: 50px;
  margin: 5px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: #0074e9;
    color: white;
  }
`;
