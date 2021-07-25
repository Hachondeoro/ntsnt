import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ReactMarkdown from "react-markdown";
import ImageGallery from "react-image-gallery";

const ModalCard = ({ data, modal, setModal }) => {
  
  // const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const arrGallery = data.image.map((v) => ({
    original: v.url,
    thumbnail: v.url,
  }));

  return (
    <div>
      {/* <Button color="primary"onClick={toggle}>
        Chinga
      </Button> */}
      <Modal isOpen={modal} toggle={toggle} className="parentCard markdown">
        <ModalHeader toggle={toggle}>{data.title}</ModalHeader>
        <ModalBody>
          <ImageGallery items={arrGallery} />
          <ReactMarkdown children={data.projectDetails} />
          <p>{data.shortDescription}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCard;
