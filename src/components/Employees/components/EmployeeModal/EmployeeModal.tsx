import React, { ReactElement } from 'react';
import Modal from 'react-modal';
import { IEmployeeDTO } from '../../../../../dto/EmployeeDTO';

interface IEmployeeModalProps {
  employee: IEmployeeDTO | undefined;
  closeModal: any;
}

export const EmployeeModal: React.FC<IEmployeeModalProps> = ({
  employee,
  closeModal,
}): ReactElement => {
  return (
    <Modal isOpen={true} onRequestClose={closeModal}>
      <h2>{`${employee?.name} ${employee?.surname}`}</h2>
      <p>Email: {employee?.email}</p>
      <p>Position: {employee?.position}</p>
    </Modal>
  );
};

Modal.setAppElement('#root');
