// import React, {useState} from 'react';
import styled from "styled-components";
import {Draggable} from 'react-beautiful-dnd';
import { Modal } from './Modal';
import { useState } from "react";

export const Schedules = (props) => {
  const {schedules, setSchedules, show, setShow, action, setAction, editItem, setEditItem} = props;

  const SPtName = styled.span`
    font-size: 1rem;
    display: block;
  `

  const SScheduleCard = styled.div`
    margin: 5px auto;
    padding: 3px;
    width: 95%;
    height: 120px;
    background-color: #fff;
    border: solid 1px #C8C8C8;
    border-radius: 10px;
  `
  const SCategoryMark = styled.span`
    display: block;
    width: 30%;
    margin: 5px;
    border-radius: 9999px;
    color: #fff;
    font-size: 0.5rem;
    padding: 0.1rem 0.2rem;
  `

  const SMassMark = styled(SCategoryMark)`
    background-color: green;
  `;

  const SHariMark = styled(SCategoryMark)`
    background-color: blue;
  `;

  const SCardText = styled.p`
    display: block;
    font-size: 0.8rem;
    margin: 0 auto;
  `

  const Sicon = styled.span`
    margin-right: 5px;
  `

  const SPatientColor = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #6FBEEE;
    font-size: 10px;
    color: white;
  `
  const SCardButton = styled.button`
    width: 25px;
    height: 25px;
    font-size: 10px;
    border-radius: 50%;
    display: inline;
    margin-right: 3px;
    margin-bottom: 0;
    :hover{
      cursor: pointer;
    }
  `

  const SCardDeleteButton = styled(SCardButton)`
    color: red;
    background-color: #fff;
    border: red solid 1px;
    :hover{
      color: #fff;
      background-color: red;
    }
  `

  const SCardEditButton = styled(SCardButton)`
    color: #40e0d0;
    background-color: #fff;
    border: #40e0d0 solid 1px;
    :hover{
      color: #fff;
      background-color: #40e0d0;
    }
  `

  const SCardButtonWrapper = styled.div`
    text-align: right;
  `

  const onClickEditCard = (item) => {
    setShow(!show)
    setAction("edit")
    setEditItem(item);
  }




  const onClickDeleteCard = (item) =>{
    const result = window.confirm("削除しますか？");
    if (result) {
      const resId = item.id;
      const targetIndex = schedules.findIndex(({id}) => id === resId);
      const newSchedules = [...schedules]
      newSchedules.splice(targetIndex, 1);
      setSchedules(newSchedules)
    }else{
      return
    }
  }

  return(
    <>
    {schedules.map((item, index) => (
      <Draggable draggableId={item.id} index={index} key={item.id} dow={item.dow}>
        {(provided) =>
          <SScheduleCard
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}d
          > 
            <SCardButtonWrapper>
              <SCardEditButton onClick={() => onClickEditCard(item)}><i class="fas fa-edit"></i></SCardEditButton>
              <SCardDeleteButton onClick={() => onClickDeleteCard(item)}><i class="fas fa-trash-alt"></i></SCardDeleteButton>
            </SCardButtonWrapper>
            <SPtName><Sicon><i class="fas fa-user-injured"></i></Sicon>{item.patient}</SPtName>
            {item.category == "マッサージ"? <SMassMark>{item.category}</SMassMark> : <SHariMark>{item.category}</SHariMark> }
            <SCardText><Sicon><i class="fas fa-user-md"></i></Sicon>{item.practitioner}</SCardText>
            <SCardText><Sicon><i class="far fa-clock"></i></Sicon>{item.eventStart}〜{item.eventEnd}</SCardText>
          </SScheduleCard>
        }
      </Draggable>
      ))}
    </>
  )
}