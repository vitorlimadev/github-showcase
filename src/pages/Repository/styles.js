import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 50%;
  }

  div {
    margin-top: 50px;

    a {
      flex-direction: row;

      & + a {
        margin-left: 30px;
      }
    }
  }

  h1 {
    font-size: 30px;
    margin-top: 25px;
  }

  p {
    font-style: italic;
    color: #666;
    text-align: center;
    line-height: 1.4;
    margin-top: 8px;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    border: 1px solid #eee;
    padding: 15px 10px;
    border-radius: 7px;

    & + li {
      margin-top: 20px;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      a {
        border: none;
        border-radius: 0;
        padding: 0;
        margin: 0;
        color: #333;

        &:hover {
          background-color: #fff;
          color: #7159c1;
        }
      }
    }
  }
`;
