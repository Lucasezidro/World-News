import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 46px 180px 32px 180px;
  gap: 300px;

  .left-content {
    img {
      width: 900px;
      height: 400px;
      border-radius: 10px;
    }

    .text {
      display: flex;
      align-items: start;
      justify-content: space-between;
      gap: 100px;

      .title {
        font-size: 20px;
      }

      .text-content {
        display: flex;
        align-items: start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 32px;
        margin-top: 40px;

        span {
          color: var(--gray-400);
          max-width: 600px;
          text-align: left;
        }

        button {
          width: 400px;
          padding: 12px;
          font-weight: bold;
          font-size: 15px;
          background-color: var(--green-300);
          border-radius: 10px;
          border: none;
          transition: all 0.5s;
          cursor: pointer;

          &:hover {
            filter: brightness(0.8);
          }
        }
      }
    }
  }

  .right-content {
    width: 300px;
    height: max-content;
    background: #111827;
    padding: 32px 32px 80px 32px;
    border-radius: 10px;

    h1 {
      color: var(--green-300);
    }
    .new-content {
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;
      padding: 16px 0 16px 0;
      border-bottom: 1px solid var(--gray-600);

      h3 {
        color: var(--pink-200);
      }

      span {
        position: relative;
        bottom: 10px;
        font-size: 14px;
        color: var(--gray-400);
      }
    }
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .left-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      img {
        position: relative;
        left: 260px;
        width: 600px;
      }
    }
  }
`
