import styled from '@emotion/styled';


export const ContactsList = styled.ol`
display: flex;
flex-direction: column;
padding: 0;
background-color: rgb(217, 217, 217);
border-radius: 10px;
border: 2px solid orange;
`

export const ContactsItem = styled.li`
display: flex;
padding: 5px;
font-size: 15px;
font-weight:400px;

:hover, :focus {
    background-color: orange;
}
`
export const ContactsDiv = styled.div`
padding: 10px;

:hover, :focus {
    color: white;
}
`
export const ContactsSpan = styled.span`
margin-left: 20px;
`



