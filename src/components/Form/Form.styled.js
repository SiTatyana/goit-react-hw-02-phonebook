import styled from '@emotion/styled';


export const PhonebookForm = styled.form `
display: flex;
padding: 20px;
color: white;
flex-direction: column;
background-color: rgb(217, 217, 217);
border-radius: 10px;
border: 2px solid orange;
margin-bottom: 20px;
`
export const PhonebookHeader = styled.h2 `
margin-right:auto;
margin-left: auto;
color:orange;
`

export const PhonebookLabel = styled.label `
display: flex;
flex-direction: column;
margin-bottom: 5px;
`
export const PhonebookInput = styled.input `
width: 320px;
padding:5px;
border: 2px solid rgb(204, 204, 204);
border-radius: 10px;
color: orange;
font-weight: 700;
`

export const PhonebookButton = styled.button`
 padding: 5px;
 color: white;
 border: 2px solid transparent;
 border-radius: 10px;
 background-color: orange;
`