import { React } from 'react';
import { Modal } from 'semantic-ui-react';

const ReusableModal = ({ children }) => {
    return(
          <Modal>
           {children}
        </Modal>
    )
}

export default ReusableModal