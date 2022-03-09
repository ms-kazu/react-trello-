import styled from "styled-components";

const SModal = styled.div`
    position: fixed;
    width: 30%;
    background-color: #fff;
    border-radius: 10px;
    border: none;
    height: 80vh;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    transform:translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
    -ms-transform: translateY(-50%) translateX(-50%);
  `

  const SModalBack = styled.div`
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
  `

  const SModalCloseButton = styled.button`
    float: right;
    margin: 5px;
    background-color: #fff;
    border: none;
    font-size: 15px;
    text-align: center;
  `


  

export const Modal = (props) => {
  const {show, setShow} = props;
  console.log(setShow);

  const onClickModalClose = () =>{
    setShow(!show)
  }

  if (show) {
    return(
      <>
        <SModalBack onClick={onClickModalClose}></SModalBack>
        <SModal>
          <SModalCloseButton onClick={onClickModalClose}>✖️</SModalCloseButton>
        </SModal>
      </>
    )
  }else{
    return null
  }
}